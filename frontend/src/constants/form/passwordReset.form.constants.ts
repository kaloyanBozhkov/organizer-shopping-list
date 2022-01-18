import { FormFieldDefinition } from 'types/form.types'

import {
    isAtLeastThisLong,
    isMatchingValueOfField,
    isNotEmptyField,
    isPassingTheseValidators,
} from 'helpers/fieldValidators'

import { PASSWORD_MIN_LENGTH } from 'constants/common.constants'

const PASSWORD_RESET_FORM_DEFINITIONS: FormFieldDefinition[] = [
    {
        name: 'newPassword',
        label: 'New Password',
        type: 'password',
        required: true,
        value: '',
        validation: isPassingTheseValidators([
            isNotEmptyField,
            isAtLeastThisLong(PASSWORD_MIN_LENGTH),
            isMatchingValueOfField('repeatPassword', 'New Password'),
        ]),
    },
    {
        name: 'repeatPassword',
        label: 'Repeat New Password',
        type: 'password',
        required: true,
        value: '',
        validation: isPassingTheseValidators([
            isNotEmptyField,
            isAtLeastThisLong(PASSWORD_MIN_LENGTH),
            isMatchingValueOfField('newPassword', 'Repeat New Password'),
        ]),
    },
]

export default PASSWORD_RESET_FORM_DEFINITIONS
