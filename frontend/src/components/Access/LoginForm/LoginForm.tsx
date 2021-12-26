import React from 'react'
import { Link } from 'react-router-dom'

import { useGetUserLoginLazyQuery } from 'types/graphQL.generated'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import LOGIN_FORM_DEFINITIONS from 'constants/form/login.form.constants'

import styles from './styles.module.scss'

const LoginForm = () => {
    const [getUser, { loading, error }] = useGetUserLoginLazyQuery({
        onCompleted: (data) => {
            // eslint-disable-next-line
            console.log(data)
        },
    })

    return (
        <Paper variant="outlined" className={styles.loginFormWrapper}>
            <Logo />
            {error && <p>Oops! Incorrect email or password :(</p>}
            <Form
                formId="loginForm"
                definitions={LOGIN_FORM_DEFINITIONS}
                submitLabel="Login"
                onSubmit={(form) => {
                    getUser({ variables: { email: form.email!.value! } })
                }}
                isSubmitPending={loading}
            />
            <Link to="../register">Don not have an account yet?</Link>
        </Paper>
    )
}

export default LoginForm
