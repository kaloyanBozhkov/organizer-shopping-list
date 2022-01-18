import { FormFieldDefinition, FormState, Validation } from 'types/form.types'

import { isValidEmail } from './utils.common'

type ValidatorFn = (this: FormFieldDefinition, formState: FormState) => Validation

export const isPassingTheseValidators = (validatorFns: ValidatorFn[]) => {
    return function curriedFn(this: FormFieldDefinition, formState: FormState) {
        let resp: Validation = { isValid: true }
        validatorFns.some((fn) => {
            const result = fn.call(this, formState)

            // return first error
            if (!result.isValid) {
                resp = result
                return true
            }

            return false
        })

        return resp
    }
}

export function isValidEmailField(this: FormFieldDefinition): Validation {
    return isValidEmail(this.value as string)
        ? {
              isValid: true,
          }
        : {
              isValid: false,
              error: 'Email format is invalid',
          }
}

export function isNotEmptyField(this: FormFieldDefinition): Validation {
    const isValid = this.required && !!this.value!.trim()

    return isValid
        ? {
              isValid,
          }
        : {
              isValid,
              error: 'Must not be empty',
          }
}

export function isNotWithSpaces(this: FormFieldDefinition): Validation {
    const isValid = !this.value!.includes(' ')

    return isValid
        ? {
              isValid,
          }
        : {
              isValid,
              error: 'Must not contain spaces',
          }
}

export const isAtLeastThisLong = (chars = 4): ValidatorFn =>
    function curriedFn(this: FormFieldDefinition) {
        const isValid = this.required && this.value!.length >= chars
        return isValid
            ? {
                  isValid,
              }
            : {
                  isValid,
                  error: `Must have at least ${chars} characters`,
              }
    }

export const isMatchingValueOfField = (
    fieldNameToCompare: string,
    identifier?: string
): ValidatorFn =>
    function curryFn(this: FormFieldDefinition, formState) {
        return formState[fieldNameToCompare].value === this.value
            ? {
                  isValid: true,
              }
            : {
                  isValid: false,
                  error: identifier ? `${identifier} do not match` : '',
              }
    }
