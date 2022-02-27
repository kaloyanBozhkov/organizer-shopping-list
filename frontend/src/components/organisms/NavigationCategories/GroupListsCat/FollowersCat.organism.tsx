import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import CategoryButtons from 'components/organisms/NavigationCategories/CategoryButtons/CategoryButtons.organism'

import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

import { followers } from './stub'

import styles from './styles.module.scss'

const FollowersCat = () => {
    const nav = useNavigate(),
        location = useLocation()

    return (
        <div className={styles.followersCat}>
            <CategoryButtons
                withAnimation
                alignment="left"
                definition={{
                    followers: {
                        noContentMsg: 'You have no followers',
                        btns: followers.map((btn) => ({
                            ...btn,
                            icon: PeopleAltIcon,
                            isActive: location.pathname === btn.path,
                            onClick: () => nav(btn.path),
                        })),
                    },
                }}
            />
        </div>
    )
}

export default FollowersCat
