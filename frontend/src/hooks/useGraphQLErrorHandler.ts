import { useEffect, useState } from 'react'

import { ApolloError } from '@apollo/client'

type GraphQLErrorHandlerProps = {
    prop: string
    errorMsg: string
    error?: ApolloError
    loading: boolean
    data: undefined | Record<string, null | unknown> | null
}

const useGraphQLErrorHandler = ({
    prop,
    errorMsg,
    error,
    loading,
    data,
}: GraphQLErrorHandlerProps): [string | undefined, (() => void) | undefined] => {
    const [errMsg, setErrMsg] = useState<undefined | string>()

    useEffect(() => {
        setErrMsg(
            ((error || !!data?.errors) &&
                'Oops! There seems to have been an issue server-side :(') ||
                (!loading && data?.[prop] === null && !error && errorMsg) ||
                undefined
        )
    }, [error, loading, data, prop, errorMsg])

    return [errMsg, errorMsg ? () => setErrMsg(undefined) : undefined]
}

export default useGraphQLErrorHandler
