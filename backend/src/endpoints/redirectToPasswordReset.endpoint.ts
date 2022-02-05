import { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'

import { generatePageHTML, hasExpired } from 'helpers/common'

/**
 * Is a redirect -> Validates email token (and deletes it if expired) and redirects to FE for setting new password
 */
const redirectToPasswordReset = (prisma: PrismaClient) => async (req: Request, res: Response) => {
    const { emailTokenId: emailToken } = req.params

    if (!emailToken) return res.send(generatePageHTML('Where is your token fool!?'))

    const token = await prisma.token.findUnique({
        select: {
            expiration: true,
        },
        where: {
            emailToken,
        },
    })

    if (!token) return res.send(generatePageHTML('Nice try looser, that token does not exist.'))

    if (hasExpired(token.expiration)) {
        await prisma.token.delete({
            where: {
                emailToken,
            },
        })

        return res.send(
            generatePageHTML(
                'This link has expired, you will have to request a new password reset.'
            )
        )
    }

    res.redirect(`${process.env.FRONTEND_URL}/access/password-reset/${emailToken}`)
}

export default redirectToPasswordReset
