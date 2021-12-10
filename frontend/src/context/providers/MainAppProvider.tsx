import React, { ReactElement, useMemo, useReducer } from 'react'

import ActionsContext, { Actions } from 'context/Actions.context'
import StoreContext, { Store, defaultStore } from 'context/Store.context'

import User from 'classes/User'

type StoreAction = {
    prop: keyof Store
    value: Store[keyof Store]
}

type SetStoreWithPrevState = (args: StoreAction | ((prevState: Store) => StoreAction)) => void

export const storeReducer = (state: Store, action: StoreAction) => ({
    ...state,
    [action.prop]: action.value,
})

export const ActionsProvider = ({
    children,
    setStore,
}: {
    children: ReactElement
    setStore: SetStoreWithPrevState
}) => {
    const actions: Actions = useMemo(
        () => ({
            onToggleLoginProcess: () => {
                setStore((store) => ({
                    prop: 'activeDialog',
                    value: store.activeDialog === 'login' ? null : 'login',
                }))
            },
            onLogin: () => {
                setStore({ prop: 'user', value: new User('UUID1', 'koko') })
            },
            onLogout: () => {
                setStore({ prop: 'user', value: null })
            },
            onAddShoppingItemToCart: (id) => {
                console.warn('onAddShoppingItemToCart', id)
            },
            onRemoveShoppingItemFromCart: (id) => {
                console.warn('onRemoveShoppingItemFromCart', id)
            },
            // onGetShoppingItems: (itemsResource) => {
            //     setStore({
            //         prop: 'shoppingItems',
            //         value: {
            //             read() {
            //                 return (
            //                     itemsResource
            //                         .read()
            //                         // quick format from arr to { id: ShoppingItem }
            //                         .reduce((acc, item) => ({ ...acc, [item.id]: item }), {})
            //                 )
            //             },
            //         },
            //     })
            // },
            onMarkPurchased: (id) => {
                console.warn('onMarkPurchased', id)
            },
        }),
        [setStore]
    )

    return <ActionsContext.Provider value={actions}>{children}</ActionsContext.Provider>
}

const MainAppProvider = ({ children }: { children: ReactElement }) => {
    const [store, setStore] = useReducer(storeReducer, defaultStore),
        /* Simulate the setState((prev) => newState) and setState(newState)
         * if setStore of Actionprovider called with obj assume it's StoreAction for setStore,
         * if called with function assume we want the past state of Store as arg and that it returns StoreAction
         */
        setStoreWithPrevState: SetStoreWithPrevState = (args) =>
            setStore(
                args.constructor.name === 'Function'
                    ? (args as (prevState: Store) => StoreAction)(store)
                    : (args as StoreAction)
            )

    return (
        <StoreContext.Provider value={store}>
            <ActionsProvider setStore={setStoreWithPrevState}>{children}</ActionsProvider>
        </StoreContext.Provider>
    )
}

export default MainAppProvider
