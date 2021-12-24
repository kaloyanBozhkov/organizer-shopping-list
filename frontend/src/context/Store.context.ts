import React from 'react'

import { ListItem } from 'types/graphQL.generated'

import type User from 'classes/User'

export type Store = {
    user: null | User
    cart: ListItem['id'][]
    activeDialog: null | 'login'
}

export const defaultStore: Store = {
    user: null,
    cart: [],
    activeDialog: null,
}

const StoreContext = React.createContext<Store>(defaultStore)

export default StoreContext
