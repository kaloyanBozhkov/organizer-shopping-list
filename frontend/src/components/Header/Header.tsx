import React, { useContext } from 'react'

import ActionsContext from 'context/Actions.context'
import GlobalContext from 'context/Global.context'

import { Button } from '@material-ui/core'

import styles from './styles.module.scss'

const Header = () => {
    const { onToggleLoginProcess } = useContext(ActionsContext),
        { user } = useContext(GlobalContext)

    return (
        <div className={styles.header}>
            <h1>ShoppingList</h1>
            {user ? (
                <Button onClick={() => alert('')} variant="contained" className={styles.logoutBtn}>
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
