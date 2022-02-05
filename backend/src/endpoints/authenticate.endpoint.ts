import { Request, Response } from 'express'

import { PrismaClient, User } from '@prisma/client'

import { ifNewGoogleUserRegisterAndReturnUser } from 'helpers/ifNewGoogleUserRegisterAndReturnUser'
import { validatePassword } from 'helpers/password'
import { getNewUserJwtToken, hasUserConfirmedEmailAddress } from 'helpers/tokens'

/**
 * Authenticate user by email & password, return new user JWT
 */
const authenticateEdnpoint = (prisma: PrismaClient) => async (req: Request, res: Response) => {
    const { email, password: pwd, tokenId } = req.body,
        userFields = {
            id: true,
            alias: true,
            email: true,
            salt: true,
            hash: true,
        }

    let user: Pick<User, keyof typeof userFields> | null = null,
        password = pwd

    // google sign in
    if (tokenId) {
        const { user: usr, password: pwd } = await ifNewGoogleUserRegisterAndReturnUser(
            prisma,
            tokenId,
            userFields as Record<keyof User, true>
        )

        user = usr
        password = pwd
    } else {
        // normal sign in
        user = await prisma.user.findUnique({
            select: userFields,
            where: {
                email,
            },
        })
    }

    // if tokenId is set and we have user record we assume the email is validated since it's Gmail user
    const hasUserConfirmedEmailAddr =
        !!(tokenId && user) || (user && (await hasUserConfirmedEmailAddress(prisma, user.id)))

    if (user && validatePassword(password, user.salt!, user.hash) && hasUserConfirmedEmailAddr) {
        const jwt = await getNewUserJwtToken({
            prisma,
            userId: user.id,
            userObj: user,
            withDeleteExistingTokens: false,
        })
        res.json({ jwt })
    } else {
        // valid gmail acc but the email is already registered normally so pass verify failed
        if (user && tokenId)
            return res.status(418).send({ code: 'google-sign-in-but-email-is-registered-manually' })

        res.sendStatus(418)
    }
}

export default authenticateEdnpoint
