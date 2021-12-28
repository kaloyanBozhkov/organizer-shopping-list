import React from 'react'

import { ReactComponent as ShoppingListSVG } from './ShoppingList.svg'

import styles from './styles.module.scss'

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={className ? [className, styles.logo].join(' ').trim() : styles.logo}>
            <ShoppingListSVG />
        </div>
    )
}

export default Logo
