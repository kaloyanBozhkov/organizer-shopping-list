import React from 'react'

import { Link } from 'react-router-dom'

import usePromise from 'hooks/Data/usePromise/usePromise'
import useErrorHandler from 'hooks/useErrorHandler'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import authenticate, { AuthenticationResponse } from 'services/authenticate'

import LOGIN_FORM_DEFINITIONS from 'constants/form/login.form.constants'

import styles from './styles.module.scss'

const LoginForm = () => {
    const {
            onRunPromise: onAuthenticate,
            error,
            loading,
        } = usePromise<AuthenticationResponse, string>(
            ({ email, password }: Record<string, string> = {}) =>
                authenticate({
                    email,
                    password,
                }),
            true
        ),
        [errorMsg, clearErrorMsg] = useErrorHandler({
            error,
            errorMsg: 'Oops! It looks like the credentials used are incorrect :(',
        })

    return (
        <Paper variant="outlined" className={styles.loginFormWrapper}>
            <Logo className={styles.logo} />
            <Form
                formId="loginForm"
                errorMsg={errorMsg}
                onFormStateChanged={clearErrorMsg}
                definitions={LOGIN_FORM_DEFINITIONS}
                submitLabel="Login"
                onSubmit={(form) => {
                    onAuthenticate!({
                        email: form.email!.value!,
                        password: form.password!.value!,
                    })
                }}
                isSubmitPending={loading}
            />
            <Link to="../register">Don not have an account yet?</Link>
        </Paper>
    )
}

export default LoginForm
