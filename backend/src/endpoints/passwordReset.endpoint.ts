import { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'

import { generatePageHTML, hasExpired } from 'helpers/common'
import { getNewUserJwtToken } from 'helpers/tokens'

const passwordResetEndpoint = (prisma: PrismaClient) => async (req: Request, res: Response) => {
    const { emailTokenId: emailToken } = req.params

    if (!emailToken) return res.send(generatePageHTML('Where is your token fool!?'))

    const token = await prisma.token.findUnique({
        where: {
            emailToken,
        },
    })

    if (!token) return res.send(generatePageHTML('Nice try looser, that token does not exist.'))

    // delete the token since we do not need it in db anymore
    await prisma.token.delete({
        where: {
            emailToken,
        },
    })

    if (hasExpired(token.expiration))
        return res.send(
            generatePageHTML(
                'This link has expired, you will have to request a new password reset.'
            )
        )

    const userToken = await getNewUserJwtToken({
        prisma,
        userId: token.userId,
        // will delete all others on successful password reset
        withDeleteExistingTokens: false,
    })

    res.redirect(`${process.env.FRONTEND_URL}/access/password-reset/${userToken}`)
}

export default passwordResetEndpoint
