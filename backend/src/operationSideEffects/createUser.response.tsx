import React from 'react'

import ReactDOMServer from 'react-dom/server'

import { TokenType, User } from '@prisma/client'

import { retryPromiseXTimes } from 'helpers/common'
import sendEmailPromise from 'helpers/email'
import { createEmailToken, generateEmailToken } from 'helpers/tokens'

import ConfirmEmail from 'reactComponents/ConfirmEmail'

import type { GraphQLResponse, ResponseSideEffectFn } from './index'

/**
 * after addUser Mutation resolves but beofre returning selection set to user ->  handle token creation and sending email
 */
const createUserSideEffectResponse: ResponseSideEffectFn = async (resp, prisma) => {
    // graphql response has errors property
    if (Object.hasOwnProperty.call(resp, 'errors')) return

    // user should be created at this point
    const {
            data: {
                createUser: { email, alias },
            },
        } = resp as GraphQLResponse<{ createUser: User }>,
        minsActive = 10,
        emailToken = await createEmailToken(prisma, email, minsActive),
        redirectUrl = `${process.env.BACKEND_URL}/confirm/${emailToken}`,
        promiseToSendMail = () =>
            sendEmailPromise({
                to: email,
                subject: 'Confirm your ShoppingList account!',
                html: ReactDOMServer.renderToString(
                    <ConfirmEmail
                        alias={alias}
                        redirectUrl={redirectUrl}
                        minutesActive={minsActive}
                    />
                ),
            })

    // maybe save info for those who fail?
    retryPromiseXTimes(promiseToSendMail, 'promiseToSendMail', 5)
}

export default createUserSideEffectResponse
