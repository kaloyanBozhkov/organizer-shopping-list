import React, { useState } from 'react'
import { userVar } from 'reactives/User.reactives'

import Logo from 'components/UI/Logo/Logo'

import { Button } from '@material-ui/core'

import styles from './styles.module.scss'

const Header = () => {
    const [mobileHeaderOpen] = useState(false)

    return (
        <div className={styles.header} data-open={mobileHeaderOpen}>
            <Logo />
            <div className={styles.actions}>
                <Button color="primary" variant="contained" onClick={() => alert('')}>
                    Account
                </Button>
                <Button
                    className={styles.logoutBtn}
                    color="primary"
                    variant="outlined"
                    onClick={() => userVar(null)}
                >
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Header
