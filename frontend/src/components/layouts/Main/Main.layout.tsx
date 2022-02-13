import React, { ReactElement, ReactNode } from 'react'

import styles from './styles.module.scss'

type MainLayoutProps = {
    header: ReactNode
    nav: ReactNode
    modal: ReactElement | null
    children: ReactNode
}

const MainLayout = ({ header, modal, nav, children }: MainLayoutProps) => (
    <div className={styles.mainLayout}>
        <header>{header}</header>
        <div className={styles.contentWrapper}>
            <nav>{nav}</nav>
            <main>{children}</main>
        </div>
        {modal && <section>{modal}</section>}
    </div>
)

export default MainLayout
