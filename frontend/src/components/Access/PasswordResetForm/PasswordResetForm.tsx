import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import PASSWORD_RESET_FORM_DEFINITIONS from 'constants/form/passwordReset.form.constants'

import styles from './styles.module.scss'

const PasswordResetForm = () => {
    const { setResetEmail } = useContext(AccessAreaContext),
        navigator = useNavigate()

    return (
        <Paper variant="outlined" className={styles.passwordResetFormWrapper}>
            <Outlet />
            <Logo />
            <Form
                formId="passwordResetForm"
                definitions={PASSWORD_RESET_FORM_DEFINITIONS}
                submitLabel="Reset Password"
                onSubmit={(form) => {
                    setResetEmail(form.email!.value!)
                    navigator('success')
                }}
                isSubmitPending={false}
            />
            <div className={styles.sideActions}>
                <Link to="../login">Remembered your account password?</Link>
                <Link to="../register">Don not have an account yet?</Link>
            </div>
        </Paper>
    )
}

export default PasswordResetForm
