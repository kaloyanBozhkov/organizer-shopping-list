import React, { useContext } from 'react'

import ActionsContext from 'context/Actions.context'
import StoreContext from 'context/Store.context'

import { Button } from '@mui/material'

import styles from './styles.module.scss'

const Header = () => {
    const { onToggleLoginProcess, onLogout } = useContext(ActionsContext),
        { user } = useContext(StoreContext)

    return (
        <div className={styles.header}>
            <h1>ShoppingList</h1>
            {user ? (
                <Button onClick={onLogout} variant="contained" className={styles.logoutBtn}>
                    Logout
                </Button>
            ) : (
                <Button
                    onClick={onToggleLoginProcess}
                    variant="contained"
                    className={styles.loginBtn}
                >
                    Login
                </Button>
            )}
        </div>
    )
}

export default Header
