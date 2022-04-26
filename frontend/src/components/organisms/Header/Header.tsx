import React from 'react'

import { setLoggedOutUser } from 'reactives/User.reactive'

import Logo from 'components/atoms/Logo/Logo.atom'

import { Button } from '@material-ui/core'

import styles from './styles.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo modifier="pageBG" className={styles.logo} />
            <div className={styles.actions}>
                <Button color="primary" variant="contained" onClick={() => alert('')}>
                    Account
                </Button>
                <Button color="primary" variant="outlined" onClick={setLoggedOutUser}>
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Header
