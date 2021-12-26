import { Dispatch, useReducer } from 'react'

import { FormFieldDefinition, FormState } from 'types/form.types'

type DispatchedChange = {
    fieldName: FormFieldDefinition['name']
    fieldValue: FormFieldDefinition['value']
}

// initializes our form state from the definitions passed to Form
export const formStateInit = (formFieldDefinitions: FormFieldDefinition[]): FormState =>
    formFieldDefinitions.reduce(
        (acc, field) => ({
            ...acc,
            [field.name]: field,
        }),
        {}
    )

const useFormState = (
    formFieldDefinitions: FormFieldDefinition[]
): [FormState, Dispatch<DispatchedChange>] => {
    const [formState, dispatchChange] = useReducer<
        (acc: FormState, dispatchedChange: DispatchedChange) => FormState,
        FormFieldDefinition[]
    >(
        (acc, dispatchedChange) => ({
            ...acc,
            [dispatchedChange.fieldName]: {
                ...acc[dispatchedChange.fieldName],
                value: dispatchedChange.fieldValue,
            },
        }),
        formFieldDefinitions,
        formStateInit
    )

    return [formState, dispatchChange]
}

export default useFormState
