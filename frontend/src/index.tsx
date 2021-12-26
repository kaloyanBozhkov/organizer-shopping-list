import React from 'react'
import { createRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import IndexRouter from 'routing/IndexRouter'

import ErrorBoundary from 'components/Errors/ErrorBoundary'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { StylesProvider } from '@material-ui/core/styles'

import 'scss/general.scss'
import 'scss/material.scss'

const rootElement = document.getElementById('root')

if (!rootElement) throw Error('No #root element found on page!')

const root = createRoot(rootElement),
    apolloClient = new ApolloClient({
        uri: `${process.env.REACT_APP_ENDPOINT_URL}/graphql`,
        cache: new InMemoryCache(),
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
