import { FormFieldDefinition } from 'types/form.types'

import {
    isNotEmptyField,
    isPassingTheseValidators,
    isValidEmailField,
} from 'helpers/fieldValidators'

const PASSWORD_RESET_FORM_DEFINITIONS: FormFieldDefinition[] = [
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        description: `What is your lost account's email?`,
        required: true,
        value: '',
        validation: isPassingTheseValidators([isNotEmptyField, isValidEmailField]),
    },
]

export default PASSWORD_RESET_FORM_DEFINITIONS
