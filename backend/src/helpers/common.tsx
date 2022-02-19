import React from 'react'

import { NextFunction } from 'express'
import ReactDOMServer from 'react-dom/server'

import OverTopErrorMsgPage from 'reactComponents/OverTopErrorMsgPage'

import { errLogger } from './logger'

export const errHandler = async (fn: () => void, next: NextFunction) => {
    try {
        await fn()
    } catch (e) {
        next(e)
    }
}

export const retryPromiseXTimes = (
    promiseCreator: () => Promise<void>,
    identifier: string,
    times = 3
) =>
    new Promise((res, rej) => {
        let counter = 1
        const executor = () =>
            promiseCreator()
                .then(res)
                .catch((err) => {
                    errLogger(
                        `Attempt ${counter} out of ${times} at running ${identifier} faild :()`
                    )

                    if (counter < times) {
                        counter++
                        executor()
                    } else {
                        rej(err)
                    }
                })

        executor()
    })

export const compareDates = (d1: Date, d2: Date, op: 'gt' = 'gt') => {
    switch (op) {
        case 'gt':
            return d1.getTime() > d2.getTime()
        default:
            return false
    }
}

export const hasExpired = (expiration: number | Date) =>
    compareDates(
        new Date(),
        typeof expiration === 'number' ? new Date(expiration) : expiration,
        'gt'
    )

export const generatePageHTML = (msg: string) =>
    ReactDOMServer.renderToString(<OverTopErrorMsgPage msg={msg} />)

export const decodeJSON = <T,>(stringifiedData: string) => JSON.parse(stringifiedData) as T
