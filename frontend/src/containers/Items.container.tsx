import React, { ReactElement, useCallback, useContext } from 'react'

import ActionsContext from 'context/Actions.context'

import ItemsTemplate from 'components/templates/Main/Items/Items.template'

const ItemsContainer = (): ReactElement => {
    const { onOpenModal } = useContext(ActionsContext),
        onCreateNewItem = useCallback(() => onOpenModal('createItem'), [onOpenModal])

    return <ItemsTemplate onCreateNew={onCreateNewItem} onFilter={() => alert('')} />
}

export default ItemsContainer
