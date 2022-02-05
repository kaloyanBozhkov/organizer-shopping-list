import { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'

import { hasExpired } from 'helpers/common'
import { getPasswordHashSalt } from 'helpers/password'

const updatePasswordEndpoint = (prisma: PrismaClient) => async (req: Request, res: Response) => {
    const { emailTokenId, newPassword } = req.body

    if (!newPassword || !emailTokenId)
        throw Error(
            `Did not receive additional param: "newPassword" or "emailTokenId" in graphql payload, the heck?`
        )

    const token = await prisma.token.findUnique({
        select: {
            expiration: true,
            userId: true,
        },
        where: {
            emailToken: emailTokenId,
        },
    })

    if (!token) throw Error('Invalid emailToken for updateUserPassword request')

    if (hasExpired(token.expiration))
        throw Error('Expired emailtoken for updateUserPassword request')

    // delete all tokens for user -> sign him out
    await prisma.token.deleteMany({
        where: {
            userId: token.userId,
        },
    })

    const { hash, salt } = getPasswordHashSalt(newPassword)

    await prisma.user.update({
        data: {
            hash: {
                set: hash,
            },
            salt: {
                set: salt,
            },
        },
        where: {
            id: token.userId,
        },
    })

    res.sendStatus(200)
}

export default updatePasswordEndpoint
