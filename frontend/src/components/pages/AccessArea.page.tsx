import React from 'react'

import { Outlet } from 'react-router-dom'

import CenteredLayout from 'components/layouts/Centered/Centered.layout'

const AccessAreaPage = () => (
    <CenteredLayout>
        <Outlet />
    </CenteredLayout>
)

export default AccessAreaPage
