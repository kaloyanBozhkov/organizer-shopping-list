import React from 'react'

import { ReactComponent as ShoppingListSVG } from './ShoppingList.svg'

import styles from './styles.module.scss'

const Logo = ({ className, modifier }: { className?: string; modifier?: 'paperBG' | 'pageBG' }) => {
    return (
        <div
            className={className ? [className, styles.logo].join(' ').trim() : styles.logo}
            data-modifier={modifier}
        >
            <ShoppingListSVG />
        </div>
    )
}

export default Logo
