import bodyParser from 'body-parser'
import cors from 'cors'
import type express from 'express'

import type { PrismaClient } from '@prisma/client'

import withErrorHandler from 'helpers/errorHandler'

import authenticateEdnpoint from 'endpoints/authenticate.endpoint'
import redirectToPasswordReset from 'endpoints/redirectToPasswordReset.endpoint'
import requestPasswordResetEndpoint from 'endpoints/requestPasswordReset.endpoint'
import updatePasswordEndpoint from 'endpoints/updatePassword.endpoint'
import validateJWT from 'endpoints/validateJWT.endpoint'

import confirmEmailEndpoint from './endpoints/confirmEmail.endpoint'
import attachOperationSideEffectsToResponse from './operationSideEffects/index'

const generateAppConfig = (prisma: PrismaClient) => {
    const middlewares = [
            // Enable All CORS Requests
            cors({
                origin: '*',
            }),
            bodyParser.json(),
            attachOperationSideEffectsToResponse(prisma),
        ],
        getEndpoints = [
            {
                path: '/confirm/:emailTokenId',
                handler: confirmEmailEndpoint(prisma),
            },
            // verify token and redirect to pass reset FE
            {
                path: '/password-reset/:emailTokenId',
                handler: redirectToPasswordReset(prisma),
            },
        ],
        postEndpoints = [
            {
                path: '/validate/:jwt',
                handler: validateJWT,
            },
            {
                path: '/authenticate',
                handler: authenticateEdnpoint(prisma),
            },
            // set token and send email for pasw reset
            {
                path: '/request-password-reset',
                handler: requestPasswordResetEndpoint(prisma),
            },
        ],
        putEndpoints = [
            // set token and send email for pasw reset
            {
                path: '/update-password',
                handler: updatePasswordEndpoint(prisma),
            },
        ]

    return {
        middlewares,
        crud: {
            post: postEndpoints,
            get: getEndpoints,
            put: putEndpoints,
        },
    }
}

/**
 * gets our initialized express app and attaches all endpoints to it wrapped in a common error handler
 * so all of them can throw
 */
export const setupAppCRUDEndpoints = (
    app: ReturnType<typeof express>,
    crud: ReturnType<typeof generateAppConfig>['crud']
) =>
    Object.keys(crud).forEach((method) => {
        const operation = method as keyof typeof crud

        crud[operation].forEach(({ path, handler }) =>
            app[operation](path, withErrorHandler(handler, path, method.toUpperCase()))
        )
    })

export default generateAppConfig
