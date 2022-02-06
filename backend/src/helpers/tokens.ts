import jwt from 'jsonwebtoken'

import { PrismaClient, TokenType, User } from '@prisma/client'

import { hasExpired } from './common'
import { AUTHENTICATION_TOKEN_EXPIRATION_HOURS } from './constants'

export type JwtPayload = {
    user: {
        id: string
        alias: string
        email: string
    }
    tokenId: string
    exp: number
}
// Generate a random 8 digit number as the email token
export const generateEmailToken = (): string =>
    Math.floor(10000000 + Math.random() * 90000000).toString()

export const createJWTToken = (prisma: PrismaClient, userId: string) =>
    prisma.token.create({
        data: {
            type: TokenType.API,
            expiration: new Date(
                new Date().getTime() + AUTHENTICATION_TOKEN_EXPIRATION_HOURS * 60 * 60 * 1000
            ),
            user: {
                connect: {
                    id: userId,
                },
            },
        },
    })

export const deleteJWTToken = (prisma: PrismaClient, userId: string) =>
    prisma.token.deleteMany({
        where: {
            userId,
        },
    })

/**
 * Sign a JWT token
 */
export const signToken = (jwtPayload: JwtPayload, userId: string) =>
    jwt.sign(jwtPayload, userId + process.env.JWT_TOKEN_SECRET)

export const getNewUserJwtToken = async ({
    prisma,
    userId,
    userObj = undefined,
    withDeleteExistingTokens = false,
}: {
    prisma: PrismaClient
    userId: string
    // avoid an extra selection if user obj provided
    userObj?: User | JwtPayload['user']
    withDeleteExistingTokens?: boolean
}) => {
    if (withDeleteExistingTokens) await deleteJWTToken(prisma, userId)

    const token = await createJWTToken(prisma, userId),
        user =
            userObj ||
            (await prisma.user.findUnique({
                where: {
                    id: token.userId,
                },
            })),
        jwtPayload = {
            user: {
                id: user!.id,
                alias: user!.alias,
                email: user!.email,
            },
            tokenId: token.id,
            exp: token.expiration.getTime(),
        }

    return signToken(jwtPayload, token.userId)
}

export const verifyTokenAndReturnUserId = (
    token: string
): { verified: false } | { verified: true; userId: string } => {
    const decoded = jwt.decode(token) as null | JwtPayload

    if (!decoded) return { verified: false }

    try {
        return {
            verified: true,
            userId:
                jwt.verify(token, (decoded?.user?.id || '') + process.env.JWT_TOKEN_SECRET) &&
                decoded.user.id,
        }
    } catch (e) {
        return { verified: false }
    }
}

/**
 * User will have 1 token of EMAIL type if email not confirmed. If confirmed should never have EMAIL type token.
 */
export const hasUserConfirmedEmailAddress = async (prisma: PrismaClient, userId: User['id']) => {
    const userTokens = await prisma.token.findMany({
            where: {
                userId,
            },
        }),
        isUnconfirmed = userTokens.length === 1 && userTokens[0].type === 'EMAIL'

    return !isUnconfirmed
}

export const createEmailToken = async (
    prisma: PrismaClient,
    email: string,
    minutesActive: number
): Promise<string | null> => {
    const periodActiveInMs = minutesActive * 1000 * 6 * 10,
        // + 10m for expiration
        tokenExpirationDate = new Date(new Date().getTime() + periodActiveInMs),
        { emailToken } = await prisma.token.create({
            data: {
                emailToken: generateEmailToken(),
                type: TokenType.EMAIL,
                expiration: tokenExpirationDate,
                user: {
                    connect: {
                        email,
                    },
                },
            },
        })

    return emailToken
}

export const hasActiveEmailTypeTokens = async (
    prisma: PrismaClient,
    user: { email: string } | { id: string }
) => {
    const existingActiveEmailTokens = await prisma.token.findMany({
        select: {
            expiration: true,
        },
        where: {
            user,
            valid: true,
            type: 'EMAIL',
        },
    })

    return (
        existingActiveEmailTokens.length > 0 &&
        existingActiveEmailTokens.some(({ expiration }) => hasExpired(expiration))
    )
}
