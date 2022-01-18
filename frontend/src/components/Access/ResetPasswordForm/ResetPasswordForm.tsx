import React, { useCallback, useContext } from 'react'

import jwtDecode from 'jwt-decode'
import { Link, Navigate, Outlet, useNavigate, useParams } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import useErrorHandler from 'hooks/useErrorHandler'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import { saveJWT } from 'helpers/token'

import PASSWORD_RESET_FORM_DEFINITIONS from 'constants/form/passwordReset.form.constants'

import styles from './styles.module.scss'

const PasswordResetForm = () => {
    const { jwt } = useParams(),
        { updatePasswordMutation } = useContext(AccessAreaContext),
        [updateUser, { loading, error }] = updatePasswordMutation,
        navigate = useNavigate(),
        saveJWTAndRedirect = useCallback(() => {
            saveJWT(jwt!)
            navigate('/')
        }, [jwt, navigate]),
        [errMsg, clearErrorMsg] = useErrorHandler({
            errorMsg: 'Oops! There was an issue updating your password :(',
            error,
        })

    return jwt ? (
        <Paper variant="outlined" className={styles.passwordResetFormWrapper}>
            <Outlet />
            <Logo className={styles.logo} />
            <Form
                formId="passwordResetForm"
                definitions={PASSWORD_RESET_FORM_DEFINITIONS}
                submitLabel="Update Password"
                errorMsg={errMsg}
                onFormStateChanged={clearErrorMsg}
                onSubmit={(form) => {
                    updateUser({
                        variables: {
                            data: {
                                hash: {
                                    set: 'data.hash.set',
                                },
                            },
                            where: {
                                id: jwtDecode<{ id: string }>(jwt).id,
                            },
                            newPassword: form.newPassword!.value!,
                        },
                    }).then(saveJWTAndRedirect)
                }}
                isSubmitPending={loading}
            />
            <div className={styles.sideActions}>
                <Link to="../login">Remembered your account password?</Link>
                <Link to="../register">Don not have an account yet?</Link>
            </div>
        </Paper>
    ) : (
        <Navigate to="/" />
    )
}

export default PasswordResetForm
