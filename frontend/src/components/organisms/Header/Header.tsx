import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { setLoggedOutUser } from 'reactives/User.reactive'

import Logo from 'components/atoms/Logo/Logo.atom'

import MainSideMenu from 'components/organisms/MainSideMenu/MainSideMenu.organism'

import { Button } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import styles from './styles.module.scss'

const Header = () => {
    const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false),
        toggleMobileHeader = () => setMobileHeaderOpen((prev) => !prev),
        loc = useLocation()

    // close mobile menu if we change location by clicking nav btn
    useEffect(() => {
        // wait for btn animation to end
        const tId = setTimeout(() => setMobileHeaderOpen(false), 400)
        return () => clearTimeout(tId)
    }, [loc])

    return (
        <>
            <Logo modifier="pageBG" className={styles.mobileLogo} />
            <div className={styles.header} data-open={mobileHeaderOpen}>
                <Button
                    variant="text"
                    className={styles.headerMobileBtn}
                    onClick={toggleMobileHeader}
                >
                    {mobileHeaderOpen ? <MenuOpenIcon /> : <MenuIcon />}
                </Button>
                <Logo modifier="pageBG" className={styles.logo} />
                <div className={styles.actions}>
                    <MainSideMenu />
                    <Button color="primary" variant="contained" onClick={() => alert('')}>
                        Account
                    </Button>
                    <Button color="primary" variant="outlined" onClick={setLoggedOutUser}>
                        Logout
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Header
