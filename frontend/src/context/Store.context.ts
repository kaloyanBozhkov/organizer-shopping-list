import React from 'react'

import { ListItem } from 'types/graphQL.generated'

export type Store = {
    cart: ListItem['id'][]
    activeModal: null | 'login'
}

export const defaultStore: Store = {
    cart: [],
    activeModal: null,
}

const StoreContext = React.createContext<Store>(defaultStore)

export default StoreContext
