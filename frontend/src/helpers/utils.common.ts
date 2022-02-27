import { TouchEvent } from 'react'

import { ResponseError } from 'types/common.types'

export const isValidEmail = (email: string): boolean => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

export const getDomainFromEmail = (email: string) => email.split('@')[1]
/**
 * Run a promise crator fn multiple times until either all attempts to resolve the created promise fail or one succeeds. Also runs callbacks accordingly if provided.
 * @param runPromise Promise creator -> catch/on error should return { error: stirng | boolean }
 * @param onFail callback fn
 * @param onSuccess callback fn
 * @param depth n. of retries, default 5
 */
export const retryPromise = <T extends ResponseError | void>(
    runPromise: () => Promise<T>,
    onFail?: () => void,
    onSuccess?: (resp: T) => void,
    depth = 5
) => {
    let countAttempts = 0

    const retry = () => {
        // no more attempts left - run potential onFail logic
        if (countAttempts === depth) return onFail?.()

        setTimeout(() => {
            runPromise().then((resp) => {
                if (resp?.error) return retry()

                onSuccess?.(resp)
            })

            countAttempts++
        }, countAttempts && 2 ** countAttempts * 100)
    }

    // first run is not a real retry
    retry()
}

export const retryPromisePromisified = <T>(promiseCreator: () => Promise<T>) =>
    new Promise<T>((res, rej) => {
        retryPromise<T>(promiseCreator, rej, res, 7)
    })

export const getTouchEventOffset = <T extends HTMLElement>(event: TouchEvent<T>) => {
    // pick first touch active or the last one that was active (touch end)
    const touch = event.touches[0] || event.changedTouches[0],
        rect = event.currentTarget.getBoundingClientRect(),
        offsetX = touch.clientX - window.pageXOffset - rect.left,
        offsetY = touch.clientY - window.pageYOffset - rect.top

    return {
        offsetX,
        offsetY,
    }
}
