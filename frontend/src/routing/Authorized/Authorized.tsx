import React, { ReactElement } from 'react'

import { useReactiveVar } from '@apollo/client'

import { Navigate } from 'react-router-dom'

import { userVar } from 'reactives/User.reactives'

type PrivatePortalProps = {
    children: ReactElement
}

const PrivatePortal = ({ children }: PrivatePortalProps) => {
    const user = useReactiveVar(userVar)
    debugger
    return user ? children : <Navigate to="access" />
}

export default PrivatePortal
