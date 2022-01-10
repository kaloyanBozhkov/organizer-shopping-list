import jwt from 'jsonwebtoken'

import { PrismaClient, TokenType, User } from '@prisma/client'

import { AUTHENTICATION_TOKEN_EXPIRATION_HOURS } from './constants'

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

type JwtPayload = {
    user: {
        id: string
        alias: string
        email: string
    }
    tokenId: string
    exp: number
}

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

    return jwt.sign(jwtPayload, token.userId + process.env.JWT_TOKEN_SECRET)
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
 * User will have 1 token of EMAIL type if email not confirmed. If condirmed should never have EMAIL type token.
 */
export const hasUserConfirmedEmailAddress = async (userId: User['id'], prisma: PrismaClient) => {
    const userTokens = await prisma.token.findMany({
            where: {
                userId,
            },
        }),
        isUnconfirmed = userTokens.length === 1 && userTokens[0].type === 'EMAIL'

    return !isUnconfirmed
}

/**
 * Determines if acc exists, is unconfirmed and temail actiivation link has expired
 */
export const hasUnconfirmedEmailAddressAndConfirmationLinkHasExpired = async (
    email: User['email'],
    prisma: PrismaClient
) => {
    const userTokens = await prisma.token.findMany({
            where: {
                user: {
                    email,
                },
            },
        }),
        isUnconfirmed = userTokens.length === 1 && userTokens[0].type === 'EMAIL'

    if (!isUnconfirmed) return false

    const hasEmailTokenExpired = userTokens[0].expiration.getTime() <= new Date().getTime()

    return hasEmailTokenExpired
}
