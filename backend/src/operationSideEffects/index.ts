import { GraphQLRequest } from 'apollo-server-express/node_modules/apollo-server-types'
import { NextFunction, Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'

import { decodeJSON } from 'helpers/common'

import createUserSideEffectRequest from './createUser.request'
import createUserSideEffectResponse from './createUser.response'

export type GraphQLErrorResponse = {
    data: null
    errors: [{ message: string }]
}

export type GraphQLResponse<T> = {
    data: T
}

export type ResponseSideEffectFn = (
    data: GraphQLErrorResponse | GraphQLResponse<Record<any, any>>,
    prisma: PrismaClient
) => Promise<void> | void

export type RequestSideEffectFn = (
    req: Request,
    graphQLRequest: GraphQLRequest,
    prisma: PrismaClient
) => Promise<GraphQLRequest>

// list of special operations that should have custom response logic
const responseSideEffects: Record<string, ResponseSideEffectFn> = {
        addUser: createUserSideEffectResponse,
    },
    requestSideEffects: Record<string, RequestSideEffectFn> = {
        addUser: createUserSideEffectRequest,
    },
    attachOperationSideEffectsToResponse =
        (prisma: PrismaClient) =>
        async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            const { operationName } = req.body

            if (!operationName) return next()

            // either keep same body or update it if the side effect exists
            req.body =
                (await requestSideEffects?.[operationName]?.(req, req.body, prisma)) || req.body

            if (responseSideEffects[operationName]) {
                const oldSend = res.send
                res.send = (data) => {
                    responseSideEffects[operationName](decodeJSON(data), prisma)
                    res.send = oldSend // set function back to avoid the 'double-send'
                    return res.send(data) // just call as normal with data
                }
            }

            next()
        }

export default attachOperationSideEffectsToResponse
