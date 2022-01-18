import React from 'react'

import { Request, Response } from 'express'
import ReactDOMServer from 'react-dom/server'

import { PrismaClient } from '@prisma/client'

import sendEmailPromise from 'helpers/email'
import {
    createEmailToken,
    hasActiveEmailTypeTokens,
    hasUserConfirmedEmailAddress,
} from 'helpers/tokens'

import RequestResetPasswordEmail from 'reactComponents/RequestResetPasswordEmail'

const requestPasswordResetEndpoint =
    (prisma: PrismaClient) => async (req: Request, res: Response) => {
        const { email } = req.body

        if (!email) res.send(JSON.stringify({ message: 'Where is your email fool!?' }))

        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        })

        if (user && (await hasUserConfirmedEmailAddress(prisma, user.id))) {
            const minsActive = 10,
                token = await createEmailToken(prisma, email, minsActive),
                redirectUrl = `${process.env.BACKEND_URL}/password-reset/${token}`

            await sendEmailPromise({
                to: email,
                subject: 'Reset your ShoppingList password',
                html: ReactDOMServer.renderToString(
                    <RequestResetPasswordEmail
                        alias={user.alias}
                        redirectUrl={redirectUrl}
                        minutesActive={minsActive}
                    />
                ),
            })
        }

        // honey pot -> elet them believe reset email was sent & acc exists
        return res.sendStatus(200)
    }

export default requestPasswordResetEndpoint
