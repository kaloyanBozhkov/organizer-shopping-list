import { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'

import { generatePageHTML, hasExpired } from 'helpers/common'
import { getNewUserJwtToken } from 'helpers/tokens'

const confirmEmailEndpoint = (prisma: PrismaClient) => async (req: Request, res: Response) => {
    const { emailTokenId } = req.params

    if (!emailTokenId) return res.send(generatePageHTML(`Where's your token fool??`))

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

    if (hasExpired(token.expiration)) {
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

    // setup membership of user once email confirmed
    await prisma.membership.create({
        data: {
            // new accs free for a year
            expiresAt: new Date(Date.now() + 60 * 60 * 24 * 365),
            user: {
                connect: {
                    id: token.userId,
                },
            },
        },
    })

    const newJWT = await getNewUserJwtToken({
        prisma,
        userId: token.userId,
        // will only have email token in there which is now invalid since we activated the email
        withDeleteExistingTokens: true,
    })

    res.redirect(`${process.env.FRONTEND_URL}/access/confirmed/${newJWT}`)
}

export default confirmEmailEndpoint
