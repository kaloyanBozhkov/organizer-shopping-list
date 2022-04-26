import React from 'react'

import { extendClassNameProp } from 'helpers/utils.common'

import { ReactComponent as ShoppingListSVG } from './ShoppingList.svg'

import styles from './styles.module.scss'

const Logo = ({ className, modifier }: { className?: string; modifier?: 'paperBG' | 'pageBG' }) => (
    <div className={extendClassNameProp(styles.logo, className)} data-modifier={modifier}>
        <ShoppingListSVG />
    </div>
)

export default Logo
