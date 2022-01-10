import React from 'react'

import { useAddUserMutation } from 'types/graphQL.generated'

export type AccessAreaContextType = {
    addUserMutation: ReturnType<typeof useAddUserMutation>
    registeredUser: { alias: string; email: string } | null
    resetEmail: string | null
    setResetEmail: (email: string) => void
}

export const defaultAccessArea = {} as AccessAreaContextType

const AccessAreaContext = React.createContext<AccessAreaContextType>(defaultAccessArea)

export const props: {
    registeredUser: AccessAreaContextType['registeredUser']
    resetEmail: AccessAreaContextType['resetEmail']
    setResetEmail: AccessAreaContextType['setResetEmail']
} = {
    registeredUser: null,
    resetEmail: null,
    setResetEmail: (email: string) => {
        props.resetEmail = email
    },
}

export default AccessAreaContext
