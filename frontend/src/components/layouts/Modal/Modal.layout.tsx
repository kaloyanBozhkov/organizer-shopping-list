import React, { ReactNode } from 'react'

import { extendClassNameProp } from 'helpers/utils.common'

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
    <div className={extendClassNameProp(styles.modalLayout, className)}>
        {header && <header>{header}</header>}
        <main>{children}</main>
        {buttons && <section>{buttons}</section>}
    </div>
)

export default ModalLayout
