import React, { useContext } from 'react'

import { Link, Outlet } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import usePromise from 'hooks/Data/usePromise/usePromise'
import useErrorHandler from 'hooks/useErrorHandler'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import REQUEST_PASSWORD_RESET_FORM_DEFINITIONS from 'constants/form/requestPasswordReset.form.constants'

import styles from './styles.module.scss'

const RequestPasswordResetForm = () => {
    const { onRequestPasswordReset } = useContext(AccessAreaContext),
        {
            onRunPromise: onRequestPaswordReset,
            loading,
            error,
        } = usePromise<Response, string>(onRequestPasswordReset, true),
        [errMsg, clearErrorMsg] = useErrorHandler({
            errorMsg: 'Oops! Something went wrong, please try again later :(',
            error,
        })

    return (
        <Paper variant="outlined" className={styles.requestPasswordResetFormWrapper}>
            <Outlet />
            <Logo className={styles.logo} />
            <Form
                formId="requestPasswordResetForm"
                definitions={REQUEST_PASSWORD_RESET_FORM_DEFINITIONS}
                submitLabel="Reset Password"
                errorMsg={errMsg}
                onFormStateChanged={clearErrorMsg}
                onSubmit={(form) => onRequestPaswordReset!({ email: form.email!.value! })}
                isSubmitPending={loading}
            />
            <div className={styles.sideActions}>
                <Link to="../login">Remembered your account password?</Link>
                <Link to="../register">Don not have an account yet?</Link>
            </div>
        </Paper>
    )
}

export default RequestPasswordResetForm
