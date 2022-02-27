import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import CategoryButtons from 'components/organisms/NavigationCategories/CategoryButtons/CategoryButtons.organism'

import RecentActorsIcon from '@mui/icons-material/RecentActors'

import { groups } from './stub'

import styles from './styles.module.scss'

const GroupListsCat = () => {
    const nav = useNavigate(),
        location = useLocation()

    return (
        <div className={styles.groupListsCat}>
            <CategoryButtons
                withAnimation
                alignment="left"
                definition={{
                    'group lists': {
                        noContentMsg: 'You are not part of any groups',
                        btns: groups.map((btn) => ({
                            ...btn,
                            icon: RecentActorsIcon,
                            isActive: location.pathname === btn.path,
                            onClick: () => nav(btn.path),
                        })),
                    },
                }}
            />
        </div>
    )
}

export default GroupListsCat
