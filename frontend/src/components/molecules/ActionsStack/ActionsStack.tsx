import React from 'react'

import ActionButton, { ActionButtonProps } from 'components/atoms/ActionButton/ActionButton'

import styles from './styles.module.scss'

type ActionsStackProps = {
    btnsDef?: ActionButtonProps[]
    position?: 'bottom-right'
    alignment?: 'vertical'
    withAnimation?: boolean
}

const ActionsStack = ({
    btnsDef,
    position = 'bottom-right',
    alignment = 'vertical',
    withAnimation = true,
}: ActionsStackProps) => (
    <>
        {!btnsDef || !btnsDef.length ? null : (
            <div
                className={styles.actionStackWrapper}
                data-alignment={alignment}
                data-position={position}
                data-with-animation={withAnimation}
            >
                {btnsDef.map((props, idx) => (
                    <ActionButton key={idx} {...props} />
                ))}
            </div>
        )}
    </>
)

export default ActionsStack
