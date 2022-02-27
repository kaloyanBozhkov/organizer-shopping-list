import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import CategoryButtons from 'components/organisms/NavigationCategories/CategoryButtons/CategoryButtons.organism'

import { mainButtons } from 'constants/nav/navButtons.constants'

import styles from './styles.module.scss'

const MainNavCat = () => {
    const nav = useNavigate(),
        location = useLocation()

    return (
        <div className={styles.mainNavCat}>
            <CategoryButtons
                withAnimation
                alignment="left"
                definition={{
                    main: {
                        btns: mainButtons.map((btn) => ({
                            ...btn,
                            isActive: location.pathname === btn.path,
                            onClick: () => nav(btn.path),
                        })),
                    },
                }}
            />
        </div>
    )
}

export default MainNavCat
