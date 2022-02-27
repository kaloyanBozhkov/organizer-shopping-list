import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

export type CategoryProps = {
    alignment?: 'centered' | 'left'
    withAnimation?: boolean
    catLabel: string
    // at start, next to header title
    headerBtn?: ReactNode
    content: ReactNode
    noContentMsg?: string
    // at end of list of btns
    afterBtn?: ReactNode
}

const Category = ({
    content,
    headerBtn,
    catLabel,
    noContentMsg,
    afterBtn,
    alignment = 'centered',
    withAnimation = false,
}: CategoryProps) => (
    <div
        data-id="categoryWrapper"
        className={styles.category}
        data-alignment={alignment}
        data-with-animation={withAnimation}
    >
        <div className={styles.heading}>
            <p>{catLabel}</p>
            {headerBtn}
        </div>
        {content ? (
            <div className={styles.contentWrapper}>{content}</div>
        ) : (
            <p className={styles.nothingHereYet}>{noContentMsg}</p>
        )}
        {afterBtn && <div className={styles.afterBtnWrapper}>{afterBtn}</div>}
    </div>
)

export default Category
