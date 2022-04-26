import React, { useCallback } from 'react'

import useDraggableX from 'hooks/useDraggableX'

import { extendClassNameProp } from 'helpers/utils.common'

import styles from './sideSlideAction.module.scss'

const SideSlideAction = ({
    side,
    className,
    onSlide,
    onSlideOngoing,
}: {
    side: 'left' | 'right'
    onSlide: () => void
    onSlideOngoing: (movedBy: number) => void
    className?: string
}) => {
    const onDragOngoing = useCallback((_, moveBy) => onSlideOngoing(moveBy), [onSlideOngoing]),
        { ref, props } = useDraggableX<HTMLDivElement>({
            onDragOngoing,
            // invert sides since grag is opposite to side
            onDragLeft: side === 'right' ? onSlide : undefined,
            onDragRight: side === 'left' ? onSlide : undefined,
            dragTriggeredBy: 5,
        })

    return (
        <div
            ref={ref}
            data-side={side}
            className={extendClassNameProp(styles.sideSlideAction, className)}
            {...props}
        />
    )
}

export default SideSlideAction
