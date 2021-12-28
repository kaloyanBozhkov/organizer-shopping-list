import React, { useState } from 'react'
import { userVar } from 'reactives/User.reactives'

import Logo from 'components/UI/Logo/Logo'

import { Button } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import styles from './styles.module.scss'

const Header = () => {
    const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false),
        toggleMobileHeader = () => setMobileHeaderOpen((prev) => !prev)

    return (
        <>
            <Logo className={styles.mobileLogo} />
            <div className={styles.header} data-open={mobileHeaderOpen}>
                <Button
                    variant="text"
                    className={styles.headerMobileBtn}
                    onClick={toggleMobileHeader}
                >
                    {mobileHeaderOpen ? <MenuOpenIcon /> : <MenuIcon />}
                </Button>
                <Logo className={styles.logo} />
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
        </>
    )
}

export default Header
