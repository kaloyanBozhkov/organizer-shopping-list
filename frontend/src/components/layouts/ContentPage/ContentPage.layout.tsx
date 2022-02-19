import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

type ContentPageProps = {
    header?: ReactNode
    nav?: ReactNode
    children: ReactNode
}

const ContentPage = ({ header, nav, children }: ContentPageProps) => (
    <div className={styles.contentPageLayout}>
        {header && <header>{header}</header>}
        <div className={styles.contentWrapper}>
            {nav && <nav>{nav}</nav>}
            <main>{children}</main>
        </div>
    </div>
)

export default ContentPage
