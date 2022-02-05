import React from 'react'

import { useAddUserMutation } from 'types/graphQL.generated'

export type AccessAreaContextType = {
    addUserMutation: ReturnType<typeof useAddUserMutation>
    registeredUser: { alias: string; email: string } | null
    resetEmail: string | null
    updatedPassword: boolean
    onRequestPasswordReset: (input?: Record<string, string>) => Promise<Response>
    onUpdatePassword: (input?: Record<string, string>) => Promise<Response>
    onSaveConfirmedJWT: (jwt: string) => void
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
    updatedPassword: false,
}

export default AccessAreaContext
