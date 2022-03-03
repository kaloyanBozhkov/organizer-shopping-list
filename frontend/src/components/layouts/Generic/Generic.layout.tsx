import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

type GenericLayoutProps = {
    children: ReactNode
    sideContent?: ReactNode
}

const GenericLayout = ({ children, sideContent }: GenericLayoutProps) => (
    <div className={styles.genericLayout}>
        <main>{children}</main>
        {sideContent && <section>{sideContent}</section>}
    </div>
)

export default GenericLayout
