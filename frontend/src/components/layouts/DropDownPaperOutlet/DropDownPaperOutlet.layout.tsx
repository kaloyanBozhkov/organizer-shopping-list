import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

const DropDownPaperOutletLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.container}>{children}</div>
            </div>
        </div>
    )
}

export default DropDownPaperOutletLayout
