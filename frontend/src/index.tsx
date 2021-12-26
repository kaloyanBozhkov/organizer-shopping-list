import React from 'react'
import { createRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import IndexRouter from 'routing/IndexRouter'

import GlobalContext, { defaultGlobal } from 'context/Global.context'

import ErrorBoundary from 'components/Errors/ErrorBoundary'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { StylesProvider } from '@material-ui/core/styles'

import 'scss/general.scss'
import 'scss/material.scss'

const rootElement = document.getElementById('root')

if (!rootElement) throw Error('No #root element found on page!')
console.warn(process.env)
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
                        <GlobalContext.Provider value={defaultGlobal}>
                            <IndexRouter />
                        </GlobalContext.Provider>
                    </ApolloProvider>
                </BrowserRouter>
            </StylesProvider>
        </ErrorBoundary>
    </React.StrictMode>
)
