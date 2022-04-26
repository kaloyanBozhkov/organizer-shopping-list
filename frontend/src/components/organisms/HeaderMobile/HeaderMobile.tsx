import React, { useCallback, useEffect, useRef, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { setLoggedOutUser } from 'reactives/User.reactive'

import useTranslateX from 'hooks/useTranslateX'

import Logo from 'components/atoms/Logo/Logo.atom'
import SideSlideAction from 'components/atoms/SideSlideAction/SideSlideAction'

import { Button } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import MainSideMenu from '../MainSideMenu/MainSideMenu.organism'

import styles from './styles.module.scss'

const HeaderMobile = () => {
    const headerRef = useRef<HTMLDivElement>(null),
        [mobileHeaderOpen, setMobileHeaderOpen] = useState(false),
        loc = useLocation(),
        {
            onMove: onMobileSideMenuDrag,
            resetTranslateXBy,
            translateXBy,
        } = useTranslateX({
            limit: 300,
        }),
        toggleMobileHeader = useCallback(() => {
            resetTranslateXBy()
            setMobileHeaderOpen((prev) => !prev)
        }, [resetTranslateXBy])

    // close mobile menu if we change location by clicking nav btn
    useEffect(() => {
        // wait for btn animation to end
        const tId = setTimeout(() => setMobileHeaderOpen(false), 400)
        return () => clearTimeout(tId)
    }, [loc])

    return (
        <>
            <Logo modifier="pageBG" className={styles.mobileLogo} />
            <SideSlideAction
                side={mobileHeaderOpen ? 'right' : 'left'}
                onSlide={toggleMobileHeader}
                onSlideOngoing={onMobileSideMenuDrag}
            />
            <div
                ref={headerRef}
                className={styles.headerMobile}
                data-open={mobileHeaderOpen}
                style={translateXBy ? { transform: `translateX(${translateXBy}px)` } : undefined}
            >
                <Button
                    variant="text"
                    className={styles.headerMobileBtn}
                    onClick={toggleMobileHeader}
                >
                    {mobileHeaderOpen ? <MenuOpenIcon /> : <MenuIcon />}
                </Button>
                <Logo modifier="pageBG" className={styles.logo} />
                <div className={styles.actions}>
                    <Button color="primary" variant="contained" onClick={() => alert('')}>
                        Account
                    </Button>
                    <MainSideMenu />
                    <Button color="primary" variant="outlined" onClick={setLoggedOutUser}>
                        Logout
                    </Button>
                </div>
            </div>
        </>
    )
}

export default HeaderMobile
