import { useState } from 'react'

import { FormState } from 'types/form.types'

type FormValidationResp = [Record<string, string>, () => boolean, (fieldName?: string) => void]

/**
 * Takes in an array of form field definition objects and returns an array of invalid fields that did not pass their .validation()
 * @param formDieldDefinitions
 * @returns [invalidFields, onValidate, onResetValidation] -> onValidate returns true if all fields valid, or false if even one is invalid
 */
const useFormValidation = (formState: FormState): FormValidationResp => {
    const [invalidFields, setInvalidFields] = useState<Record<string, string>>({}),
        onValidate = () => {
            // update invalidFields to only hold fieldName of invalid fields
            const invalidFieldsArr = Object.values(formState).reduce((acc, field) => {
                if (field.required) {
                    const validation = field.validation(formState)
                    return validation.isValid
                        ? acc
                        : {
                              ...acc,
                              [field.name]:
                                  validation.error || 'Field is invalid - no error msg setup',
                          }
                }

                return acc
            }, {} as Record<string, string>)

            setInvalidFields(invalidFieldsArr)

            // return true if all fields valid, or false if at least one invalid
            return !Object.values(invalidFieldsArr).length
        },
        onResetValidation = (fieldName?: string) =>
            setInvalidFields(
                fieldName
                    ? // if for field provided let's reset just that one
                      Object.keys(invalidFields).reduce(
                          (acc, property) =>
                              fieldName === property
                                  ? acc
                                  : { ...acc, [property]: invalidFields[property] },
                          {}
                      )
                    : // otherwise reset all invalid fields
                      {}
            )

    return [invalidFields, onValidate, onResetValidation]
}

export default useFormValidation
