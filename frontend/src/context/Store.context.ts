import React from 'react'

import type ShoppingItem from 'classes/ShoppingItem'
import type User from 'classes/User'

export type Store = {
    user: null | User
    cart: ShoppingItem['id'][]
    activeDialog: null | 'login'
}

export const defaultStore: Store = {
    user: null,
    cart: [],
    activeDialog: null,
}

const StoreContext = React.createContext<Store>(defaultStore)

export default StoreContext
