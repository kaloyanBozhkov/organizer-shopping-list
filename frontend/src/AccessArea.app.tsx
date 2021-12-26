import React from 'react'

import AccessAreaContainer from 'containers/AccessArea.container'

import type { RenderApplicationType } from './index'

const AccessAreaApp = ({ renderApplication }: { renderApplication: RenderApplicationType }) => {
    if (false) renderApplication('admin')

    return <AccessAreaContainer />
}

export default AccessAreaApp
