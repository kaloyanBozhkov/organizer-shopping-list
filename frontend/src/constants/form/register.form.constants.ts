import { FormFieldDefinition } from 'types/form.types'

import {
    isAtLeastThisLong,
    isMatchingValueOfField,
    isNotEmptyField,
    isNotWithSpaces,
    isPassingTheseValidators,
    isValidEmailField,
} from 'helpers/fieldValidators'

import { PASSWORD_MIN_LENGTH } from 'constants/common.constants'

const REGISTER_FORM_DEFINITIONS: FormFieldDefinition[] = [
    {
        name: 'alias',
        label: 'Alias',
        type: 'text',
        required: true,
        description: 'What should we call you?',
        value: '',
        validation: isPassingTheseValidators([
            isNotEmptyField,
            isNotWithSpaces,
            isAtLeastThisLong(5),
        ]),
    },
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
        required: true,
        value: '',
        validation: isPassingTheseValidators([
            isAtLeastThisLong(PASSWORD_MIN_LENGTH),
            isNotWithSpaces,
            isMatchingValueOfField('repeatPassword', 'Password fields'),
        ]),
    },
    {
        name: 'repeatPassword',
        label: 'Repeat Password',
        type: 'password',
        required: true,
        value: '',
        validation: isPassingTheseValidators([
            isAtLeastThisLong(PASSWORD_MIN_LENGTH),
            isNotWithSpaces,
            isMatchingValueOfField('password', 'Password fields'),
        ]),
    },
]

export default REGISTER_FORM_DEFINITIONS
