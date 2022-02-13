import React from 'react'

import CenteredLayout from 'components/layouts/Centered/Centered.layout'

import Issue from 'components/templates/Issue/Issue.template'

export const ErrorPage = ({ errorMsg }: { errorMsg: string }) => (
    <CenteredLayout>
        <Issue message={errorMsg} />
    </CenteredLayout>
)
