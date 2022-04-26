import React, { useContext } from 'react'

import { Link, Navigate, Outlet, useParams } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import usePromise from 'hooks/data/usePromise/usePromise'

import Logo from 'components/atoms/Logo/Logo.atom'

import Form from 'components/organisms/Form/Form.organism'

import { Paper } from '@material-ui/core'

import PASSWORD_RESET_FORM_DEFINITIONS from 'constants/form/passwordReset.form.constants'

import styles from './styles.module.scss'

const PasswordResetForm = () => {
    const { emailTokenId } = useParams(),
        { onUpdatePassword } = useContext(AccessAreaContext),
        {
            loading,
            error,
            onRunPromise: onUpdateUserPassword,
            onReset,
        } = usePromise<Response, string>(onUpdatePassword, true)

    return emailTokenId ? (
        <Paper variant="outlined" className={styles.passwordResetFormWrapper}>
            <Outlet />
            <Logo modifier="paperBG" className={styles.logo} />
            <Form
                formId="passwordResetForm"
                definitions={PASSWORD_RESET_FORM_DEFINITIONS}
                submitLabel="Update Password"
                errorMsg={error && 'Oops! There was an issue updating your password :('}
                onFormStateChanged={error ? onReset : undefined}
                onSubmit={(form) => {
                    onUpdateUserPassword!({
                        newPassword: form.newPassword!.value!,
                        emailTokenId,
                    })
                }}
                isSubmitPending={loading}
            />
            <div className={styles.sideActions}>
                <Link to="../login">Remembered your old account password?</Link>
                <Link to="../register">Don not have an account yet?</Link>
            </div>
        </Paper>
    ) : (
        <Navigate to="/" />
    )
}

export default PasswordResetForm
