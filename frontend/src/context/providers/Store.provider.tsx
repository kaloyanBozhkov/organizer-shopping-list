import React, { ReactElement, useReducer } from 'react'

import StoreContext, { Store, StoreAction, defaultStore } from 'context/Store.context'

export const storeReducer = (state: Store, action: StoreAction) => ({
    ...state,
    [action.prop]: action.value,
})

const StoreProvider = ({ children }: { children: ReactElement }) => {
    const [store, setStore] = useReducer(storeReducer, defaultStore),
        /* Simulate the setState((prev) => newState) and setState(newState)
         * if setStore of Actionprovider called with obj assume it's StoreAction for setStore,
         * if called with function assume we want the past state of Store as arg and that it returns StoreAction
         */
        setStoreWithPrevState: Store['setStoreWithPrevState'] = (args) =>
            setStore(
                args.constructor.name === 'Function'
                    ? (args as (prevState: Store) => StoreAction)(store)
                    : (args as StoreAction)
            )

    return (
        <StoreContext.Provider
            value={{
                ...store,
                setStoreWithPrevState,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider
