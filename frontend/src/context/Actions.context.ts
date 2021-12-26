import React from 'react'

import { ListItem } from 'types/graphQL.generated'

export type Actions = {
    onToggleLoginProcess: () => void
    onAddShoppingItemToCart: (id: ListItem['id']) => void
    onRemoveShoppingItemFromCart: (id: ListItem['id']) => void
    onMarkPurchased: (id: ListItem['id']) => void
}

const ActionsContext = React.createContext<Actions>({} as Actions)

export default ActionsContext
