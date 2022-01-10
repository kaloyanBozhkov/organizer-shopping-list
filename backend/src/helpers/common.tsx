import React from 'react'
import ReactDOMServer from 'react-dom/server'

import OverTopErrorMsgPage from 'reactComponents/OverTopErrorMsgPage'

import errLogger from './errLogger'

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

export const generatePageHTML = (msg: string) =>
    ReactDOMServer.renderToString(<OverTopErrorMsgPage msg={msg} />)

export const decodeJSON = <T,>(stringifiedData: string) => JSON.parse(stringifiedData) as T
