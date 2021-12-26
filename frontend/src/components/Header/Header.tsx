import React, { useContext } from 'react'
import { userVar } from 'reactives/User.reactives'

import ActionsContext from 'context/Actions.context'

import { Button } from '@material-ui/core'

import styles from './styles.module.scss'

const Header = () => {
    const { onToggleLoginProcess } = useContext(ActionsContext)

    return (
        <div className={styles.header}>
            <h1>ShoppingList</h1>
            {userVar() ? (
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
