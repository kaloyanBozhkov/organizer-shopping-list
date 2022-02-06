import React, { ReactElement } from 'react'

import { useReactiveVar } from '@apollo/client'

import { Navigate } from 'react-router-dom'

import { tokenVar } from 'reactives/Token.reactive'

type SignedOutProps = {
    children: ReactElement
}

const SignedOutGate = ({ children }: SignedOutProps) => {
    const token = useReactiveVar(tokenVar)
    return token ? <Navigate to="/" /> : children
}

export default SignedOutGate
