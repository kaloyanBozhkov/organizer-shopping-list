import { NextFunction, Request, Response } from 'express'

import { createUserSideEffect } from './createUser'

export type GraphQLErrorResponse = {
    data: null
    errors: [{ message: string }]
}

export type GraphQLResponse<T> = {
    data: T
}

export const decodeJSON = <T>(stringifiedData: string) => {
    return JSON.parse(stringifiedData) as T
}

export type SideEffectFn = (
    data: GraphQLErrorResponse | GraphQLResponse<Record<any, any>>
) => Promise<void> | void

// list of special operations that should have custom response logic
const specialOperations = ['addUser'],
    sideEffects: Record<typeof specialOperations[0], SideEffectFn> = {
        addUser: createUserSideEffect,
    },
    attachOperationSideEffectsToResponse = (
        req: Request,
        res: Response,
        next: NextFunction
    ): void => {
        const { operationName } = req.body

        if (specialOperations.includes(operationName)) {
            const oldSend = res.send
            res.send = (data) => {
                sideEffects[operationName](decodeJSON(data))
                res.send = oldSend // set function back to avoid the 'double-send'
                return res.send(data) // just call as normal with data
            }
        }

        next()
    }

export default attachOperationSideEffectsToResponse
