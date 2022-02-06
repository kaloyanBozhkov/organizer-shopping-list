import { OAuth2Client } from 'google-auth-library'
import { v4 as uuid } from 'uuid'

import { MembershipStatus, PrismaClient, User } from '@prisma/client'

import { getPasswordHashSalt } from 'helpers/password'

export const ifNewGoogleUserRegisterAndReturnUser = async (
    prisma: PrismaClient,
    tokenId: string,
    userFields: Record<keyof User, true>
) => {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID),
        ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID,
        }),
        payload = ticket.getPayload(),
        userId = ticket.getUserId()

    if (!payload) throw Error('googleAuthenticateEndpoint: falsy return of ticket.getPayload()')
    if (!userId) throw Error('googleAuthenticateEndpoint: falsy return of ticket.getUserId()')
    if (!userId)
        throw Error(`googleAuthenticateEndpoint: invalid google ticket for tokenId: ${tokenId}`)

    const { name: alias, email, picture } = payload

    if (!alias || !email)
        throw Error('ifNewGoogleUserRegisterAndReturnUser: ticket payload has falsy alias or email')

    let user = await prisma.user.findUnique({
        select: userFields,
        where: {
            email,
        },
    })

    if (!user) {
        const { hash, salt } = getPasswordHashSalt(userId)

        user = await prisma.user.create({
            select: userFields,
            data: {
                alias,
                email,
                picture,
                hash,
                salt,
                fromProvider: true,
                membership: {
                    create: {
                        // 1 year free
                        expiresAt: new Date(Date.now() + 60 * 60 * 24 * 365),
                    },
                },
            },
        })
    }

    return { user, password: userId }
}
