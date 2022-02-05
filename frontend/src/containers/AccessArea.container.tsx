import React, { useCallback } from 'react'

import { useReactiveVar } from '@apollo/client'

import { Navigate, useNavigate } from 'react-router-dom'

import { useAddUserMutation } from 'types/graphQL.generated'

import AccessAreaContext, { props as AccessAreaContextProps } from 'context/AccessArea.context'

import { userVar } from 'reactives/User.reactives'

import AccessAreaPage from 'components/pages/AccessArea.page'

import requestResetPassword from 'services/requestResetPassword'
import updatePassword from 'services/updatePassword'

import { saveJWT } from 'helpers/token'

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
        onUpdatePassword = useCallback(
            ({ emailTokenId, newPassword } = {}) =>
                new Promise<Response>((res, rej) =>
                    updatePassword(emailTokenId, newPassword)
                        .then((resp) => {
                            res(resp)

                            AccessAreaContextProps.updatedPassword = true
                            nav(`/access/password-reset/${emailTokenId}/success`)
                        })
                        .catch(rej)
                ),
            [nav]
        ),
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
        ),
        onSaveConfirmedJWT = useCallback(
            (jwt: string) => {
                saveJWT(jwt)
                nav('/')
            },
            [nav]
        )

    return user ? (
        <Navigate to="/" />
    ) : (
        <AccessAreaContext.Provider
            value={{
                addUserMutation,
                onUpdatePassword,
                onRequestPasswordReset,
                onSaveConfirmedJWT,
                ...AccessAreaContextProps,
            }}
        >
            <AccessAreaPage />
        </AccessAreaContext.Provider>
    )
}

export default AccessAreaContainer
