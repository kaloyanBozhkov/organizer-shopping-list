import React, { ReactElement } from 'react'

import { FormFieldDefinition, FormState } from 'types/form.types'

import useFormState from 'hooks/Form/useFormState'
import useFormValidation from 'hooks/Form/useFormValidation'

import { Button, TextField } from '@material-ui/core'

import styles from './styles.module.scss'

type FormProps = {
    definitions: FormFieldDefinition[]
    formId?: string
    isSubmitPending?: boolean
    submitLabel: string
    // BE provided errors obj following submit
    fieldErrors?: Record<string, string>
    onSubmit?: (formState: FormState) => void | boolean
    onFormStateChanged?: (fieldName: string) => void
    onFormFieldFocused?: (fieldName: string) => void
}

/**
 *
 * @param formId string to identify form element and apply custom styles from parent
 * @param action form action attribute
 * @param method 'POST' | 'GET'
 * @param definitions FormFieldDefinition[] -> what fields to render, what their label/validation/requirement is etc..
 * @param isSubmitPending boolean -> renders loading spinner instead of btn indicative or pending operation
 * @param submitLabel string for submit btn label
 * @param fieldErrors
 * @param onSubmit fn to call on submit click, prevents default behavior runs fn and then submits form
 * @param onFormStateChanged fn to call when form state has changed -> useful for events relative to on form field change
 * @param onFormFieldFocused fn to call when a form field has been focused -> useful for removing fieldErrors or triggering smth on form field focus
 * @returns Form ReactElement
 */
const Form = ({
    formId,
    definitions,
    submitLabel = 'Submit',
    fieldErrors = {},
    isSubmitPending = false,
    onSubmit,
    onFormStateChanged,
    onFormFieldFocused,
}: FormProps): ReactElement => {
    const [formState, dispatchChange] = useFormState(definitions),
        [invalidFields, onValidate, onResetValidation] = useFormValidation(formState)

    return (
        <form className={styles.form} form-id={formId} autoComplete="off">
            <div data-id={`${formId}-fieldContainer`}>
                {Object.values(formState).map(
                    ({ name, type, label, value, required, description }) => {
                        // either from FE's invalidFields (pre submit) or BE's fieldErrors (post submit)
                        const fieldErrorMsg = invalidFields[name] || fieldErrors[name],
                            fieldHasErrored = !!fieldErrorMsg

                        return (
                            <TextField
                                variant="filled"
                                key={name}
                                type={type}
                                name={name}
                                label={label}
                                value={value}
                                required={required}
                                error={fieldHasErrored}
                                helperText={fieldHasErrored ? fieldErrorMsg : description}
                                onChange={({ target: { value: fieldValue } }) => {
                                    // update field value
                                    dispatchChange({ fieldValue, fieldName: name })

                                    if (invalidFields[name]) onResetValidation(name)

                                    // on change of field if we have a fn to run let's run it and pass field name of changed form field
                                    onFormStateChanged?.(name)
                                }}
                                onFocus={() => {
                                    // if field is invalid let's reset it
                                    if (invalidFields[name]) onResetValidation(name)

                                    // on focus of field run the fn if we have passed it as prop
                                    onFormFieldFocused?.(name)
                                }}
                            />
                        )
                    }
                )}
            </div>
            {isSubmitPending ? (
                <Button>Loading..</Button>
            ) : (
                <Button
                    type="submit"
                    variant="contained"
                    color={(Object.values(invalidFields).length && 'secondary') || 'primary'}
                    onClick={(e) => {
                        // prevent default form behavior
                        e.preventDefault()

                        if (onValidate()) onSubmit?.(formState)
                    }}
                >
                    {submitLabel}
                </Button>
            )}
        </form>
    )
}

export default Form
