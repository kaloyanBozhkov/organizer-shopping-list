import React from 'react'
import { Link } from 'react-router-dom'
import { setLoggedInUser } from 'reactives/User.reactives'

import { useGetUserLoginLazyQuery } from 'types/graphQL.generated'

import useGraphQLErrorHandler from 'hooks/useGraphQLErrorHandler'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import LOGIN_FORM_DEFINITIONS from 'constants/form/login.form.constants'

import styles from './styles.module.scss'

const LoginForm = () => {
    const [getUser, { loading, error, data }] = useGetUserLoginLazyQuery({
            onCompleted: ({ user }) => user && setLoggedInUser(user),
            fetchPolicy: 'network-only',
        }),
        [errorMsg, clearErrorMsg] = useGraphQLErrorHandler({
            prop: 'user',
            errorMsg: 'Oops! Incorrect email or password :(',
            data,
            error,
            loading,
        })

    return (
        <Paper variant="outlined" className={styles.loginFormWrapper}>
            <Logo />
            <Form
                formId="loginForm"
                errorMsg={errorMsg}
                onFormStateChanged={clearErrorMsg}
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
