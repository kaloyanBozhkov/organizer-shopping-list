import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { userVar } from 'reactives/User.reactives'

import { useAddUserMutation } from 'types/graphQL.generated'

import AccessAreaContext, { props as AccessAreaContextProps } from 'context/AccessArea.context'

import AccessAreaPage from 'pages/AccessArea.page'

import { useReactiveVar } from '@apollo/client'

const AccessAreaContainer = () => {
    const user = useReactiveVar(userVar),
        navigator = useNavigate(),
        addUserMutation = useAddUserMutation({
            onCompleted: ({ createUser: { alias, email } }) => {
                AccessAreaContextProps.registeredUser = { alias, email }
                navigator('/access/register/success')
            },
            onError(error) {
                console.error('AccessAreaContainer', error)
            },
        })

    return user ? (
        <Navigate to="/" />
    ) : (
        <AccessAreaContext.Provider value={{ addUserMutation, ...AccessAreaContextProps }}>
            <AccessAreaPage />
        </AccessAreaContext.Provider>
    )
}

export default AccessAreaContainer
