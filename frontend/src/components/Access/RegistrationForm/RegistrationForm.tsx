import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import REGISTER_FORM_DEFINITIONS from 'constants/form/register.form.constants'

import styles from './styles.module.scss'

const RegistrationForm = () => {
    const { addUserMutation } = useContext(AccessAreaContext),
        [addUser, { loading, error }] = addUserMutation

    return (
        <Paper variant="outlined" className={styles.registerFormWrapper}>
            <Logo />
            {error && <p>Oops! Could not create your account :(</p>}
            <Form
                formId="registerForm"
                definitions={REGISTER_FORM_DEFINITIONS}
                submitLabel="Register"
                onSubmit={(form) => {
                    addUser({
                        variables: {
                            alias: form.alias!.value!,
                            email: form.email!.value!,
                        },
                        notifyOnNetworkStatusChange: true,
                    })
                }}
                isSubmitPending={loading}
            />
            <Link to="../login">Already have an account?</Link>
        </Paper>
    )
}

export default RegistrationForm
