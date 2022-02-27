import React from 'react'

import GroupListsCat from 'components/organisms/NavigationCategories/FollowersCat/GroupListsCat.organism'
import FollowingCat from 'components/organisms/NavigationCategories/FollowingCat/FollowingCat.organism'
import FollowersCat from 'components/organisms/NavigationCategories/GroupListsCat/FollowersCat.organism'
import MainNavCat from 'components/organisms/NavigationCategories/MainNavCat/MainNavCat.organism'
import ShoppingListsCat from 'components/organisms/NavigationCategories/ShoppingListsCat/ShoppingListsCat.organism'

import styles from './styles.module.scss'

const MainSideMenu = () => {
    return (
        <div className={styles.mainSideMenuWrapper} data-id="mainSideMenu">
            <MainNavCat />
            <ShoppingListsCat />
            <GroupListsCat />
            <FollowingCat />
            <FollowersCat />
        </div>
    )
}

export default MainSideMenu
