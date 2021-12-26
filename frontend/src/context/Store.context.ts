import React from 'react'

import { ListItem } from 'types/graphQL.generated'

export type Store = {
    cart: ListItem['id'][]
    activeDialog: null | 'login'
}

export const defaultStore: Store = {
    cart: [],
    activeDialog: null,
}

const StoreContext = React.createContext<Store>(defaultStore)

export default StoreContext
