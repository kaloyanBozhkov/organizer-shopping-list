import React, { ReactNode } from 'react'

import styles from './modalLayout.module.scss'

const ModalLayout = ({
    header,
    children,
    buttons,
    className,
}: {
    header?: ReactNode
    children: ReactNode
    buttons?: ReactNode
    className?: string
}) => (
    <div
        className={
            className ? [className, styles.modalLayout].join(' ').trim() : styles.modalLayout
        }
    >
        {header && <header>{header}</header>}
        <main>{children}</main>
        {buttons && <section>{buttons}</section>}
    </div>
)

export default ModalLayout
