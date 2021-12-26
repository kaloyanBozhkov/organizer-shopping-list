import React from 'react'

import { useAddUserMutation } from 'types/graphQL.generated'

export type AccessAreaContextType = {
    addUserMutation: ReturnType<typeof useAddUserMutation>
}

export const defaultAccessArea = {} as AccessAreaContextType

const AccessAreaContext = React.createContext<AccessAreaContextType>(defaultAccessArea)

export default AccessAreaContext
