import { useCallback, useEffect, useState } from 'react'

type ReturnObj<D, E> = {
    response: D | undefined
    error: E | undefined
    loading: boolean
    onRefetch: () => void
    onRunPromise?: (props?: Record<string, string>) => void
}
/*
 * Provided promise is ran & when it settles its resolution or rejection values are memoized & returned
 */
const usePromise = <D, E>(
    promiseFnCreator: (props?: Record<string, string>) => Promise<D>,
    lazy = false
): ReturnObj<D, E> => {
    const [response, setResonse] = useState<D | undefined>(),
        [error, setError] = useState<E | undefined>(),
        [loading, setLoading] = useState<boolean>(!lazy),
        [fetched, setFetched] = useState(false),
        /* eslint-disable react-hooks/exhaustive-deps */
        onPromiseCreator = useCallback(promiseFnCreator, []),
        onRefetch = useCallback(() => {
            setFetched((prev) => !prev)
            setResonse(undefined)
            setError(undefined)
            setLoading(true)
        }, []),
        onRunPromise = (props?: Record<string, string>) => {
            if (lazy) setLoading(true)

            onPromiseCreator(props)
                .then(setResonse)
                .catch(setError)
                .finally(() => setLoading(false))
        }

    useEffect(() => {
        if (!lazy) onRunPromise()
    }, [onPromiseCreator, fetched])

    return {
        response,
        error,
        loading,
        onRefetch,
        ...(lazy
            ? {
                  onRunPromise,
              }
            : {}),
    }
}

export default usePromise
