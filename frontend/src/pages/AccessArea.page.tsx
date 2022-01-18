import React from 'react'

import { Outlet } from 'react-router-dom'

import CenteredLayout from 'templates/CenteredLayout/Centered.layout'

const AccessAreaPage = () => (
    <CenteredLayout>
        <Outlet />
    </CenteredLayout>
)

export default AccessAreaPage
