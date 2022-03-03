import React from 'react'

import { ListItem } from 'types/graphQL.generated'

export type StoreAction = {
    prop: keyof Store
    value: Store[keyof Store]
}

export type Store = {
    cart: ListItem['id'][]
    activeModal: null | 'createItem'
    /* Simulate the setState((prev) => newState) and setState(newState)
     * if setStore of Actionprovider called with obj assume it's StoreAction for setStore,
     * if called with function assume we want the past state of Store as arg and that it returns StoreAction
     */
    setStoreWithPrevState: (args: StoreAction | ((prevState: Store) => StoreAction)) => void
}

export const defaultStore: Store = {
    cart: [],
    activeModal: null,
    // set inside provider properly
    setStoreWithPrevState: () => undefined,
}

const StoreContext = React.createContext<Store>(defaultStore)

export default StoreContext
