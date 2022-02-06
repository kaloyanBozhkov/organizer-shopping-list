import React, { ReactElement } from 'react'

import { useReactiveVar } from '@apollo/client'

import { Navigate } from 'react-router-dom'

import { tokenVar } from 'reactives/Token.reactive'

type SignedInGateProps = {
    children: ReactElement
}

const SignedInGate = ({ children }: SignedInGateProps) => {
    const token = useReactiveVar(tokenVar)
    return token ? children : <Navigate to="access" />
}

export default SignedInGate
