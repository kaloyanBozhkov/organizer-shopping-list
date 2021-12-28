import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AccessAreaContext from 'context/AccessArea.context'

import useGraphQLErrorHandler from 'hooks/useGraphQLErrorHandler'

import Form from 'components/Form/Form'
import Logo from 'components/UI/Logo/Logo'

import { Paper } from '@material-ui/core'

import REGISTER_FORM_DEFINITIONS from 'constants/form/register.form.constants'

import styles from './styles.module.scss'

const RegistrationForm = () => {
    const { addUserMutation } = useContext(AccessAreaContext),
        [addUser, { loading, error, data }] = addUserMutation,
        [errorMsg, clearErrorMsg] = useGraphQLErrorHandler({
            prop: 'user',
            errorMsg: 'Oops! The provided credentials may already have been saved before :(',
            data,
            error,
            loading,
        })

    return (
        <Paper variant="outlined" className={styles.registerFormWrapper}>
            <Logo />
            <Form
                formId="registerForm"
                definitions={REGISTER_FORM_DEFINITIONS}
                submitLabel="Register"
                errorMsg={errorMsg}
                onFormStateChanged={clearErrorMsg}
                onSubmit={(form) => {
                    addUser({
                        variables: {
                            alias: form.alias!.value!,
                            email: form.email!.value!,
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
