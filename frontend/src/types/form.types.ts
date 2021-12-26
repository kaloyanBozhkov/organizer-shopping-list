import type { TextFieldProps } from '@material-ui/core'

export type Validation =
    | {
          isValid: true
      }
    | {
          isValid: false
          error: string
      }

export type FormFieldDefinition = Omit<
    TextFieldProps,
    'onChange' | 'onFocus' | 'onBlur' | 'name' | 'helperText' | 'value'
> & {
    name: NonNullable<TextFieldProps['name']>
    description?: TextFieldProps['helperText']
    value?: string
    required: boolean
    // true if valid field, string if invalid and has error message, false if invalid but no error msg
    validation: (formState: FormState) => Validation
}

export type FormState = Record<NonNullable<TextFieldProps['name']>, FormFieldDefinition>

// fastAPI errr response's formatted fieldName: errorMsg
export type FormFieldErrors = Record<string, string>
