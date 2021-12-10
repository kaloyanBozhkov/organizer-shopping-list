import React, { ReactElement, ReactNode } from 'react'

import styles from './styles.module.scss'

type MainLayoutProps = {
    header: ReactNode
    dialog: ReactElement | null
    children: ReactNode
}

const MainLayout = ({ header, dialog, children }: MainLayoutProps) => {
    return (
        <div className={styles.mainLayout}>
            <header>{header}</header>
            <main>{children}</main>
            <section>{dialog}</section>
        </div>
    )
}

export default MainLayout
