import React, { useContext } from 'react'

import ActionsContext from 'context/Actions.context'

import ModalLayout from 'components/layouts/Modal/Modal.layout'

import { Button } from '@material-ui/core'

import styles from './createItemModal.module.scss'

const CreateItemModal = () => {
    const { onCloseModal } = useContext(ActionsContext)

    return (
        <ModalLayout
            className={styles.modalWrapper}
            header="Create New Item"
            buttons={
                <>
                    <Button variant="contained" color="primary" onClick={() => alert('')}>
                        Create
                    </Button>
                    <Button variant="outlined" color="primary" onClick={onCloseModal}>
                        Close
                    </Button>
                </>
            }
        >
            <div className={styles.createItemModalContentWrapper}>
                <p>HEY MATE MAKE DAT MODAL YP</p>
            </div>
        </ModalLayout>
    )
}

export default CreateItemModal
