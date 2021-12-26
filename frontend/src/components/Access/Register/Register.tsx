import React, { useContext } from 'react'

import AccessAreaContext from 'context/AccessArea.context'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import { REGISTER_FORM_DEFINITIONS } from 'constants/form/register.form.constants'

import styles from './styles.module.scss'

const RegistrationForm = () => {
    const { addUserMutation } = useContext(AccessAreaContext),
        [addUser] = addUserMutation

    return (
        <Paper variant="outlined" className={styles.registerFormWrapper}>
            <Logo />
            <Form
                formId="registerForm"
                definitions={REGISTER_FORM_DEFINITIONS}
                submitLabel="Register"
                onSubmit={(form) => {
                    console.warn(form)
                    console.warn(addUser)
                    // addUser({ variables: { alias: '', email: '' } })
                }}
            />
        </Paper>
    )
}

export default RegistrationForm
