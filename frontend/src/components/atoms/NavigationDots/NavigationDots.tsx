import React from 'react'

import styles from './styles.module.scss'

const NavigationDots = ({
    dotCount,
    activeIdx,
    onClick,
}: {
    dotCount: number
    activeIdx: number
    onClick: (n: number) => void
}) => (
    <div className={styles.navigationDotsWrapper}>
        {Array(dotCount)
            .fill(undefined)
            .map((unused, idx) => {
                const isActive = activeIdx === idx
                return (
                    <button
                        key={idx}
                        data-is-active={isActive}
                        onClick={isActive ? undefined : () => onClick(idx)}
                    />
                )
            })}
    </div>
)

export default NavigationDots
