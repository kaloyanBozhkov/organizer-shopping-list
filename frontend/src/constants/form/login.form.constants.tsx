import React from 'react'
import { Link } from 'react-router-dom'

import { FormFieldDefinition } from 'types/form.types'

import {
    isAtLeastThisLong,
    isNotEmptyField,
    isPassingTheseValidators,
    isValidEmailField,
} from 'helpers/fieldValidators'

const LOGIN_FORM_DEFINITIONS: FormFieldDefinition[] = [
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        value: '',
        validation: isPassingTheseValidators([isNotEmptyField, isValidEmailField]),
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        description: <Link to="../password-reset">Forgot your password?</Link>,
        required: true,
        value: '',
        validation: isPassingTheseValidators([isAtLeastThisLong(6)]),
    },
]

export default LOGIN_FORM_DEFINITIONS
