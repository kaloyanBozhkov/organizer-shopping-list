import React, { useContext, useMemo } from 'react'

import ActionsContext from 'context/Actions.context'
import StoreContext from 'context/Store.context'

import CreateItemModal from 'components/templates/modals/CreateItem/CreateItem.modal'

import { Dialog } from '@material-ui/core'

import styles from './indexModal.module.scss'

const IndexModal = () => {
    const { activeModal } = useContext(StoreContext),
        { onCloseModal } = useContext(ActionsContext),
        content = useMemo(() => {
            switch (activeModal) {
                case 'createItem':
                    return <CreateItemModal />
                default:
                    return null
            }
        }, [activeModal])

    return (
        <Dialog
            className={styles.indexModalWrapper}
            open={activeModal !== null}
            onClose={onCloseModal}
        >
            {content}
        </Dialog>
    )
}

export default IndexModal
