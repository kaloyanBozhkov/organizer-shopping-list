import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

type CenteredLayoutProps = {
    children: ReactNode
}

const CenteredLayout = ({ children }: CenteredLayoutProps) => {
    return (
        <div className={styles.centeredLayout}>
            <main>{children}</main>
        </div>
    )
}

export default CenteredLayout
