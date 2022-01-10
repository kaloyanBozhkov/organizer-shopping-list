import { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'

import { compareDates, generatePageHTML } from 'helpers/common'
import { getNewUserJwtToken } from 'helpers/tokens'

const confirmEmailEndpoint = (prisma: PrismaClient) => async (req: Request, res: Response) => {
    const { emailTokenId } = req.params

    if (!emailTokenId) res.send(generatePageHTML(`Where's your token fool??`))

    const token = await prisma.token.findUnique({
        where: {
            emailToken: emailTokenId,
        },
    })

    if (!token)
        return res.send(
            generatePageHTML(
                `Where did you get this token from ${emailTokenId}???? Double check it.. since it is wrong, fool.`
            )
        )

    if (!token.valid)
        return res.send(
            generatePageHTML(
                `This token ain't valid fool ${emailTokenId}!! It may have already been activated :P`
            )
        )

    if (compareDates(new Date(), token.expiration)) {
        const { userId } = await prisma.token.delete({
            where: {
                emailToken: emailTokenId,
            },
        })

        // prisma schema does not support deletion behavior of relations yet - and I do not want the DB to have special configs that the schema does not
        await prisma.user.delete({
            where: {
                id: userId,
            },
        })

        return res.send(
            generatePageHTML(
                `Mofo u kidding me?? This token is expired!! You will have to re-register... lame!`
            )
        )
    }

    // invalidate email token used for registration
    await prisma.token.update({
        data: {
            valid: false,
        },
        where: {
            // token is set for sure
            emailToken: token.emailToken as string,
        },
    })

    const tokensOfUser = await prisma.token.findMany({
            where: {
                id: token.userId,
            },
        }),
        alreadyActivated = tokensOfUser.filter(({ valid }) => valid).length > 0

    if (alreadyActivated) {
        return res.send(
            generatePageHTML(
                `What the fukk brotha, you already activated this email addreass!!!!!!!!`
            )
        )
    }

    const newJWT = await getNewUserJwtToken({
        prisma,
        userId: token.userId,
        withDeleteExistingTokens: false,
    })

    res.redirect(`${process.env.FRONTEND_URL}/access/confirmed/${newJWT}`)
}

export default confirmEmailEndpoint
