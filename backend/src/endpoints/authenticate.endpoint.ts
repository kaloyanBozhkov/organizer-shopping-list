import { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'

import { validatePassword } from 'helpers/password'
import { getNewUserJwtToken, hasUserConfirmedEmailAddress } from 'helpers/tokens'

/**
 * Authenticate user by email & password, return new user JWT
 */
const authenticateEdnpoint = (prisma: PrismaClient) => async (req: Request, res: Response) => {
    const { email, password } = req.body,
        user = await prisma.user.findUnique({
            select: {
                id: true,
                alias: true,
                email: true,
                salt: true,
                hash: true,
            },
            where: {
                email,
            },
        })

    if (
        user &&
        validatePassword(password, user.salt!, user.hash) &&
        (await hasUserConfirmedEmailAddress(user.id, prisma))
    ) {
        const jwt = await getNewUserJwtToken({
            prisma,
            userId: user.id,
            userObj: user,
            withDeleteExistingTokens: false,
        })
        return res.json({ jwt })
    }

    res.json({ jwt: null })
}

export default authenticateEdnpoint
