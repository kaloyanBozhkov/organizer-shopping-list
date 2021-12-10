import React from 'react'

import type ShoppingItem from 'classes/ShoppingItem'

export type Actions = {
    onToggleLoginProcess: () => void
    onLogin: () => void
    onLogout: () => void
    onAddShoppingItemToCart: (id: ShoppingItem['id']) => void
    onRemoveShoppingItemFromCart: (id: ShoppingItem['id']) => void
    onMarkPurchased: (id: ShoppingItem['id']) => void
}

const ActionsContext = React.createContext<Actions>({} as Actions)

export default ActionsContext
