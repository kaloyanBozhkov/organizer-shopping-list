import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from '@material-ui/core'
import CategoryIcon from '@mui/icons-material/Category'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import StoreIcon from '@mui/icons-material/Store'

import styles from './styles.module.scss'

const appButtonsByCategory = {
        main: [
            {
                label: 'Items',
                path: '/items',
                icon: CategoryIcon,
            },
            {
                label: 'Shops',
                path: '/shops',
                icon: StoreIcon,
            },
            {
                label: 'Friends',
                path: '/friends',
                icon: PeopleAltIcon,
            },
        ],
        lists: [
            {
                label: 'My Workout List asd asd asd asdasdas d',
                path: '/wkl',
                icon: ListAltIcon,
            },
        ],
    },
    SideMenu = () => {
        const nav = useNavigate()

        return (
            <div className={styles.sideMenuWrapper}>
                {Object.keys(appButtonsByCategory).map((categoryName) => (
                    <div className={styles.category} key={categoryName} data-cat={categoryName}>
                        <div className={styles.heading}>
                            <p>{categoryName}</p>
                        </div>
                        {appButtonsByCategory[
                            categoryName as keyof typeof appButtonsByCategory
                        ].map(({ label, path, icon: IconComponent }) => (
                            <Button
                                key={path}
                                variant="text"
                                color="primary"
                                onClick={() => nav(path)}
                                startIcon={<IconComponent />}
                            >
                                {label}
                            </Button>
                        ))}
                    </div>
                ))}
            </div>
        )
    }

export default SideMenu
