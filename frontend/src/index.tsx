import React from 'react'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client'

import { errorLink, tokenAuthLink } from 'graphql/apollo.links'
import { createRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import IndexRouter from 'routing/IndexRouter'

import ErrorBoundary from 'components/Errors/ErrorBoundary'

import { StylesProvider } from '@material-ui/core/styles'

import 'scss/general.scss'
import 'scss/material.scss'

const rootElement = document.getElementById('root')

if (!rootElement) throw Error('No #root element found on page!')

export const cache = new InMemoryCache()

const root = createRoot(rootElement),
    httpLink = new HttpLink({
        uri: `${process.env.REACT_APP_BACKEND_ENDPOINT_URL}/graphql`,
        credentials: 'same-origin',
    }),
    apolloClient = new ApolloClient({
        cache,
        link: from([tokenAuthLink, errorLink, httpLink]),
        connectToDevTools: true,
    })

root.render(
    // Add back when Apollo Client useMutation is no longer failing with StrictMode due to re-renders https://github.com/apollographql/apollo-client/issues/9251
    // <React.StrictMode>
    <ErrorBoundary>
        <StylesProvider injectFirst>
            <BrowserRouter>
                <ApolloProvider client={apolloClient}>
                    <IndexRouter />
                </ApolloProvider>
            </BrowserRouter>
        </StylesProvider>
    </ErrorBoundary>
    // </React.StrictMode>
)
