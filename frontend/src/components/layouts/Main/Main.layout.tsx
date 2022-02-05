import React, { ReactElement, ReactNode } from 'react'

import styles from './styles.module.scss'

type MainLayoutProps = {
    header: ReactNode
    modal: ReactElement | null
    children: ReactNode
}

const MainLayout = ({ header, modal, children }: MainLayoutProps) => (
    <div className={styles.mainLayout}>
        <header>{header}</header>
        <main>{children}</main>
        {modal && <section>{modal}</section>}
    </div>
)

export default MainLayout
