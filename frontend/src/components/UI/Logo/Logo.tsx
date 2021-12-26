import React from 'react'

import { ReactComponent as ShoppingListSVG } from './ShoppingList.svg'

import styles from './styles.module.scss'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <ShoppingListSVG />
        </div>
    )
}

export default Logo
