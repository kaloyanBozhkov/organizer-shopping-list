import jwtDecode from 'jwt-decode'

import { PrismaClient } from '@prisma/client'

import { hasExpired } from 'helpers/common'
import { JwtPayload } from 'helpers/tokens'

export const getUserContext = async (prisma: PrismaClient, token?: string) => {
    if (!token) return null

    const { tokenId } = jwtDecode<JwtPayload>(token),
        existingToken = await prisma.token.findUnique({
            where: {
                id: tokenId,
            },
            select: {
                expiration: true,
                id: true,
                user: {
                    select: {
                        alias: true,
                        email: true,
                        role: true,
                        id: true,
                        membership: {
                            select: {
                                type: true,
                            },
                        },
                    },
                },
            },
        })

    if (!existingToken) return null

    if (hasExpired(existingToken.expiration)) {
        await prisma.token.delete({
            where: {
                id: existingToken.id,
            },
        })

        return null
    }

    return {
        token: {
            expiration: existingToken.expiration,
            id: existingToken.id,
        },
        user: existingToken.user,
    }
}
