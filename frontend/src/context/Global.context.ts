import React from 'react'

import type User from 'classes/User'

export type Global = {
    user: null | User
}

export const defaultGlobal: Global = {
    user: null,
}

const GlobalContext = React.createContext<Global>(defaultGlobal)

export default GlobalContext
