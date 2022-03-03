import React from 'react'

// import { ListItem } from 'types/graphQL.generated'
import type { Store } from './Store.context'

export type Actions = {
    onCloseModal: () => void
    onOpenModal: (modal: NonNullable<Store['activeModal']>) => void
}

const ActionsContext = React.createContext<Actions>({} as Actions)

export default ActionsContext
