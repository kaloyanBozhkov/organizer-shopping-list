import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import CategoryButtons from 'components/organisms/NavigationCategories/CategoryButtons/CategoryButtons.organism'

import ListAltIcon from '@mui/icons-material/ListAlt'

import { following } from './stub'

import styles from './styles.module.scss'

const FollowingCat = () => {
    const nav = useNavigate(),
        location = useLocation()

    return (
        <div className={styles.followingCat}>
            <CategoryButtons
                withAnimation
                alignment="left"
                definition={{
                    following: {
                        noContentMsg: 'You have not followed anybody',
                        btns: following.map((btn) => ({
                            ...btn,
                            icon: ListAltIcon,
                            isActive: location.pathname === btn.path,
                            onClick: () => nav(btn.path),
                        })),
                    },
                }}
            />
        </div>
    )
}

export default FollowingCat
