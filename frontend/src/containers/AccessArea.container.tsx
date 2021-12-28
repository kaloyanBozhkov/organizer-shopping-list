import React from 'react'
import { Navigate } from 'react-router-dom'
import { setLoggedInUser, userVar } from 'reactives/User.reactives'

import { useAddUserMutation } from 'types/graphQL.generated'

import AccessAreaContext from 'context/AccessArea.context'

import AccessAreaPage from 'pages/AccessArea.page'

import { useReactiveVar } from '@apollo/client'

const AccessAreaContainer = () => {
    const user = useReactiveVar(userVar),
        addUserMutation = useAddUserMutation({
            onCompleted: ({ createUser }) => {
                setLoggedInUser(createUser)
            },
            onError(error) {
                console.error('AccessAreaContainer', error)
            },
        })

    return user ? (
        <Navigate to="/" />
    ) : (
        <AccessAreaContext.Provider value={{ addUserMutation }}>
            <AccessAreaPage />
        </AccessAreaContext.Provider>
    )
}

export default AccessAreaContainer
