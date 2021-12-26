import { FormFieldDefinition } from 'types/form.types'

import {
    isAtLeastThisLong,
    isMatchingValueOfField,
    isNotEmptyField,
    isPassingTheseValidators,
    isValidEmailField,
} from 'helpers/fieldValidators'

const REGISTER_FORM_DEFINITIONS: FormFieldDefinition[] = [
    {
        name: 'alias',
        label: 'Alias',
        type: 'text',
        required: true,
        description: 'What should we call you?',
        value: '',
        validation: isPassingTheseValidators([isNotEmptyField, isAtLeastThisLong(5)]),
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
            isAtLeastThisLong(6),
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
            isAtLeastThisLong(6),
            isMatchingValueOfField('password'),
        ]),
    },
]

export default REGISTER_FORM_DEFINITIONS
