import React from 'react'
import { createRoot } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import ErrorBoundary from 'components/Errors/ErrorBoundary'

import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'

import MainApp from './Main.app'

import 'scss/general.scss'

const rootElement = document.getElementById('root')

if (!rootElement) throw Error('No #root element found on page!')

const root = createRoot(rootElement),
    queryClient = new QueryClient(),
    theme = createTheme()

type Applications = 'app' | 'admin'

export const renderApplication = (what: Applications) => {
    let content

    switch (what) {
        case 'admin':
            content = null
            break
        default:
            content = <MainApp />
    }

    root.render(
        <React.StrictMode>
            <ErrorBoundary>
                {/* 
                    Most CSS-in-JS solutions inject their styles at the bottom of the HTML <head>, which gives MUI precedence over your custom styles.
                    To remove the need for !important, you need to change the CSS injection order 
                */}
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <QueryClientProvider client={queryClient}>
                            {content}
                            <ReactQueryDevtools initialIsOpen={false} />
                        </QueryClientProvider>
                    </ThemeProvider>
                </StyledEngineProvider>
            </ErrorBoundary>
        </React.StrictMode>
    )
}

// rendr main app
renderApplication('app')
