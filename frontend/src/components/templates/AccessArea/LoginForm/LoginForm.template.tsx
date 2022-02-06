import React, { useContext, useEffect, useState } from 'react'

import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import usePromise from 'hooks/Data/usePromise/usePromise'

import Logo from 'components/atoms/Logo/Logo.atom'

import Form from 'components/organisms/Form/Form.organism'

import { Button, CircularProgress, Paper } from '@material-ui/core'
import GoogleIcon from '@mui/icons-material/Google'
import LoginIcon from '@mui/icons-material/Login'

import authenticate from 'services/authenticate'

import LOGIN_FORM_DEFINITIONS from 'constants/form/login.form.constants'

import styles from './styles.module.scss'

const handleErrorMessage = (errorResp: { code: string } | string) => {
        switch (typeof errorResp !== 'string' && errorResp.code) {
            case 'google-sign-in-but-email-is-registered-manually':
                return 'Oops! You tried to sign in with Google, but your account was registered manually!'
            default:
                return 'Oops! It looks like the credentials used are incorrect :('
        }
    },
    LoginForm = () => {
        const [loginMethod, setLoginMethod] = useState<'default' | 'google'>('default'),
            { onSaveConfirmedJWT } = useContext(AccessAreaContext),
            {
                onRunPromise: onAuthenticate,
                onReset,
                error,
                loading,
                response: jwt,
            } = usePromise<null | string, string>(
                ({ email, password, tokenId }: Record<string, string> = {}) => {
                    // control which btn is loading anim
                    setLoginMethod(tokenId ? 'google' : 'default')

                    return authenticate({
                        email,
                        password,
                        tokenId,
                    }).catch((r: string | { code: string }) =>
                        Promise.reject(handleErrorMessage(r))
                    )
                },
                true
            ),
            isGoogleSignInPending = loading && loginMethod === 'google'

        // auth complete, let's fire login logic
        useEffect(() => {
            if (jwt) onSaveConfirmedJWT(jwt)
        }, [jwt, onSaveConfirmedJWT])

        return (
            <Paper variant="outlined" className={styles.loginFormWrapper}>
                <Logo modifier="paperBG" className={styles.logo} />
                <Form
                    formId="loginForm"
                    errorMsg={error}
                    onFormStateChanged={error ? onReset : undefined}
                    definitions={LOGIN_FORM_DEFINITIONS}
                    submitLabel="Sign In"
                    onSubmit={(form) => {
                        onAuthenticate!({
                            email: form.email!.value!,
                            password: form.password!.value!,
                        })
                    }}
                    isSubmitPending={loading && loginMethod === 'default'}
                    submitIconStart={<LoginIcon />}
                />
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
                    onSuccess={(googleData) => {
                        if ('code' in googleData) return console.error('oops')

                        onAuthenticate!({
                            // used on BE to get user id -> avoids XXS
                            tokenId: googleData.tokenId,
                        })
                    }}
                    // eslint-disable-next-line
                    onFailure={console.log}
                    cookiePolicy="single_host_origin"
                    redirectUri={`${process.env.REACT_APP_BACKEND_ENDPOINT_URL}/`}
                    render={({ onClick, disabled }) => (
                        <Button
                            variant="contained"
                            color="primary"
                            data-google-disabled={disabled}
                            disabled={disabled || isGoogleSignInPending}
                            onClick={onClick}
                            startIcon={isGoogleSignInPending ? undefined : <GoogleIcon />}
                        >
                            {isGoogleSignInPending ? <CircularProgress /> : 'Sign In'}
                        </Button>
                    )}
                />
                <Link to="../register">Don not have an account yet?</Link>
            </Paper>
        )
    }

export default LoginForm
