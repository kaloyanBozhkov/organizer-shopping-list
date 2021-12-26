import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import PASSWORD_RESET_FORM_DEFINITIONS from 'constants/form/passwordReset.form.constants'

import styles from './styles.module.scss'

const PasswordResetForm = () => {
    return (
        <Paper variant="outlined" className={styles.passwordResetFormWrapper}>
            <Logo />
            <Form
                formId="passwordResetForm"
                definitions={PASSWORD_RESET_FORM_DEFINITIONS}
                submitLabel="Reset Password"
                onSubmit={(form) => {
                    console.warn(form.email!.value!)
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
