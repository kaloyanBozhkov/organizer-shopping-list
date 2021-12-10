import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

type GenericLayoutProps = {
    children: ReactNode
}

const GenericLayout = ({ children }: GenericLayoutProps) => {
    return (
        <div className={styles.genericLayout}>
            <main>{children}</main>
        </div>
    )
}

export default GenericLayout
