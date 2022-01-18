import React from 'react'

import { useAddUserMutation, useUpdateUserPasswordMutation } from 'types/graphQL.generated'

export type AccessAreaContextType = {
    addUserMutation: ReturnType<typeof useAddUserMutation>
    updatePasswordMutation: ReturnType<typeof useUpdateUserPasswordMutation>
    registeredUser: { alias: string; email: string } | null
    resetEmail: string | null
    // has password been updated successfully
    updatedPassword: null | true
    onRequestPasswordReset: (input?: Record<string, string>) => Promise<Response>
}

export const defaultAccessArea = {} as AccessAreaContextType

const AccessAreaContext = React.createContext<AccessAreaContextType>(defaultAccessArea)

export const props: {
    registeredUser: AccessAreaContextType['registeredUser']
    resetEmail: AccessAreaContextType['resetEmail']
    updatedPassword: AccessAreaContextType['updatedPassword']
} = {
    registeredUser: null,
    resetEmail: null,
    updatedPassword: null,
}

export default AccessAreaContext
