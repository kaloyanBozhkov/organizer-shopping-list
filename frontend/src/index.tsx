import { errorLink, tokenAuthLink } from 'graphql/apollo.links'

import React from 'react'
import { createRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import IndexRouter from 'routing/IndexRouter'

import ErrorBoundary from 'components/Errors/ErrorBoundary'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client'
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
    <React.StrictMode>
        <ErrorBoundary>
            <StylesProvider injectFirst>
                <BrowserRouter>
                    <ApolloProvider client={apolloClient}>
                        <IndexRouter />
                    </ApolloProvider>
                </BrowserRouter>
            </StylesProvider>
        </ErrorBoundary>
    </React.StrictMode>
)
