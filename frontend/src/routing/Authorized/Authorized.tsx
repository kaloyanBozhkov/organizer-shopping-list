import React, { ReactElement, useContext } from 'react'
import { Navigate } from 'react-router-dom'

import GlobalContext from 'context/Global.context'

type PrivatePortalProps = {
    children: ReactElement
}

const PrivatePortal = ({ children }: PrivatePortalProps) => {
    const { user } = useContext(GlobalContext)
    return user ? children : <Navigate to="access" />
}

export default PrivatePortal
