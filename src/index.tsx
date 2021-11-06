import React from 'react'
import { createRoot } from 'react-dom'
import App from './App'
import 'scss/general.scss'

const rootElement = document.getElementById('root')

if (!rootElement) throw Error('No #root element found on page!')

const root = createRoot(rootElement)

type Applications = 'app' | 'admin'

export const renderApplication = (what: Applications) => {
    let content

    switch (what) {
        case 'admin':
            content = null
            break
        default:
            content = <App />
    }

    root.render(<React.StrictMode>{content}</React.StrictMode>)
}

// rendr main app
renderApplication('app')
