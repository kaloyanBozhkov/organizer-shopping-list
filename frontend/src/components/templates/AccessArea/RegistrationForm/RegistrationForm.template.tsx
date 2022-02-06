import React, { useContext } from 'react'

import { Link, Outlet } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import Logo from 'components/atoms/Logo/Logo.atom'

// import useErrorHandler from 'hooks/useErrorHandler'
import Form from 'components/organisms/Form/Form.organism'

import { Paper } from '@material-ui/core'

import REGISTER_FORM_DEFINITIONS from 'constants/form/register.form.constants'

import styles from './styles.module.scss'

const RegistrationForm = () => {
    const { addUserMutation } = useContext(AccessAreaContext),
        [addUser, { loading, error, reset }] = addUserMutation

    return (
        <Paper variant="outlined" className={styles.registerFormWrapper}>
            <Outlet />
            <Logo modifier="paperBG" className={styles.logo} />
            <Form
                formId="registerForm"
                definitions={REGISTER_FORM_DEFINITIONS}
                submitLabel="Register"
                errorMsg={
                    error && 'Oops! The provided credentials may already have been saved before :('
                }
                onFormStateChanged={reset}
                onSubmit={(form) => {
                    addUser({
                        variables: {
                            alias: form.alias!.value!,
                            email: form.email!.value!,
                            password: form.password!.value!,
                        },
                    })
                }}
                isSubmitPending={loading}
            />
            <Link to="../login">Already have an account?</Link>
        </Paper>
    )
}

export default RegistrationForm
