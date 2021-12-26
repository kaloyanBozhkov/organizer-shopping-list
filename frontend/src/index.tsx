import React from 'react'
import { createRoot } from 'react-dom'

import GlobalContext, { defaultGlobal } from 'context/Global.context'

import ErrorBoundary from 'components/Errors/ErrorBoundary'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { StylesProvider } from '@material-ui/core/styles'

import AccessAreaApp from './AccessArea.app'

import 'scss/general.scss'
import 'scss/material.scss'

const rootElement = document.getElementById('root')

if (!rootElement) throw Error('No #root element found on page!')
console.warn(process.env)
const root = createRoot(rootElement),
    apolloClient = new ApolloClient({
        uri: process.env.REACT_APP_ENDPOINT_URL,
        cache: new InMemoryCache(),
    })

type Applications = 'app' | 'admin' | 'accessArea'

export type RenderApplicationType = typeof renderApplication

const renderApplication = (what: Applications) => {
    let content

    switch (what) {
        case 'accessArea':
            content = <AccessAreaApp renderApplication={renderApplication} />
            break
        case 'admin':
            content = null
            break
        default:
            content = null
    }

    root.render(
        <React.StrictMode>
            <ErrorBoundary>
                <StylesProvider injectFirst>
                    <ApolloProvider client={apolloClient}>
                        <GlobalContext.Provider value={defaultGlobal}>
                            {content}
                        </GlobalContext.Provider>
                    </ApolloProvider>
                </StylesProvider>
            </ErrorBoundary>
        </React.StrictMode>
    )
}

// rendr main app or access area
renderApplication(defaultGlobal.user ? 'app' : 'accessArea')
