import { useEffect, useState } from 'react'

import { ApolloError } from '@apollo/client'

type ErrorHandlerProps = {
    errorMsg: string
    error?: ApolloError | string
}

const useErrorHandler = ({
    errorMsg = 'Oops! There seems to have been an issue server-side :(',
    error,
}: ErrorHandlerProps): [string | undefined, (() => void) | undefined, (errMsg: string) => void] => {
    const [errMsg, setErrMsg] = useState<undefined | string>()

    useEffect(() => {
        setErrMsg((error && errorMsg) || undefined)
    }, [error, errorMsg])

    return [errMsg, errorMsg ? () => setErrMsg(undefined) : undefined, setErrMsg]
}

export default useErrorHandler
