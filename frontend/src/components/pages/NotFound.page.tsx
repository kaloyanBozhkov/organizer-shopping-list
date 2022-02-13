import React from 'react'

import { useLocation } from 'react-router-dom'

import CenteredLayout from 'components/layouts/Centered/Centered.layout'

import Issue from 'components/templates/Issue/Issue.template'

const NotFoundPage = () => {
    const loc = useLocation()

    return (
        <CenteredLayout>
            <Issue>
                <h1>
                    Oops! Nothing was found under <b>{loc.pathname}</b> :(
                </h1>
            </Issue>
        </CenteredLayout>
    )
}

export default NotFoundPage
