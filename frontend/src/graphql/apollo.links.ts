import { ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import { getJWT } from 'helpers/token'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) => {
            // eslint-disable-next-line
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        })

    // eslint-disable-next-line
    if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const tokenAuthLink = new ApolloLink((operation, forward) => {
    const token = getJWT()
    operation.setContext(({ headers }: { headers: Record<string, string> }) => ({
        headers: {
            authorization: token ? `Bearer ${token}` : '',
            ...headers,
        },
    }))
    return forward(operation)
})
