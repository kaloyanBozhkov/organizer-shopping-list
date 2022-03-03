import React, { ReactElement, useContext, useMemo } from 'react'

import ActionsContext, { Actions } from 'context/Actions.context'
import StoreContext from 'context/Store.context'

// actions that change the store
const ActionsProvider = ({ children }: { children: ReactElement }) => {
    const { setStoreWithPrevState: setStore } = useContext(StoreContext),
        actions: Actions = useMemo(
            () => ({
                onCloseModal: () =>
                    setStore({
                        prop: 'activeModal',
                        value: null,
                    }),
                onOpenModal: (value) =>
                    setStore({
                        value,
                        prop: 'activeModal',
                    }),
            }),
            [setStore]
        )

    return <ActionsContext.Provider value={actions}>{children}</ActionsContext.Provider>
}

export default ActionsProvider
