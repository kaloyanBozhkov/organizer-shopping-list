import React from 'react'

import CenteredLayout from 'components/layouts/Centered/Centered.layout'

import LoadingTemplate from 'components/templates/Loading/Loading.template'

const LoadingPage = ({ message }: { message?: string }) => (
    <CenteredLayout>
        <LoadingTemplate message={message} />
    </CenteredLayout>
)

export default LoadingPage
