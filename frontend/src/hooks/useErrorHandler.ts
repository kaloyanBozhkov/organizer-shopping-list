import { useEffect, useState } from 'react'

import { ApolloError } from '@apollo/client'

type ErrorHandlerProps = {
    errorMsg: string
    error?: ApolloError | string
    reset?: () => void
}

const useErrorHandler = ({
    errorMsg = 'Oops! There seems to have been an issue server-side :(',
    error,
    reset,
}: ErrorHandlerProps): [string | undefined, (() => void) | undefined] => {
    const [errMsg, setErrMsg] = useState<undefined | string>()

    useEffect(() => {
        setErrMsg((error && errorMsg) || undefined)
    }, [error, errorMsg, reset])

    useEffect(() => reset?.(), [reset])

    return [errMsg, errorMsg ? () => setErrMsg(undefined) : undefined]
}

export default useErrorHandler
