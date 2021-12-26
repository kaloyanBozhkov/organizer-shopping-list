import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { userVar } from 'reactives/User.reactives'

import { useReactiveVar } from '@apollo/client'

type PrivatePortalProps = {
    children: ReactElement
}

const PrivatePortal = ({ children }: PrivatePortalProps) => {
    const user = useReactiveVar(userVar)

    return user ? children : <Navigate to="access" />
}

export default PrivatePortal
