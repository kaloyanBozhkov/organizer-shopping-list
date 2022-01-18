import React, { useCallback } from 'react'

import { useReactiveVar } from '@apollo/client'

import { Navigate, useNavigate } from 'react-router-dom'

import { useAddUserMutation, useUpdateUserPasswordMutation } from 'types/graphQL.generated'

import AccessAreaContext, { props as AccessAreaContextProps } from 'context/AccessArea.context'

import { userVar } from 'reactives/User.reactives'

import AccessAreaPage from 'pages/AccessArea.page'

import requestResetPassword from 'services/requestResetPassword'

const AccessAreaContainer = () => {
    const user = useReactiveVar(userVar),
        nav = useNavigate(),
        addUserMutation = useAddUserMutation({
            onCompleted: ({ createUser: { alias, email } }) => {
                AccessAreaContextProps.registeredUser = { alias, email }
                nav('/access/register/success')
            },
            onError(error) {
                console.error('AccessAreaContainer', error)
            },
            fetchPolicy: 'no-cache',
        }),
        updatePasswordMutation = useUpdateUserPasswordMutation({
            onCompleted: () => {
                AccessAreaContextProps.updatedPassword = true
                nav('/access/password-reset/success')
            },
        }),
        onRequestPasswordReset = useCallback(
            ({ email } = {}) =>
                new Promise<Response>((res, rej) =>
                    requestResetPassword(email)
                        .then((resp) => {
                            res(resp)

                            // will always succeed - honey pot
                            AccessAreaContextProps.resetEmail = email
                            nav('/access/request-password-reset/success')
                        })
                        // will error on network issues only
                        .catch(rej)
                ),
            [nav]
        )

    return user ? (
        <Navigate to="/" />
    ) : (
        <AccessAreaContext.Provider
            value={{
                addUserMutation,
                updatePasswordMutation,
                onRequestPasswordReset,
                ...AccessAreaContextProps,
            }}
        >
            <AccessAreaPage />
        </AccessAreaContext.Provider>
    )
}

export default AccessAreaContainer
