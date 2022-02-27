import React, { ReactNode, RefObject, useCallback, useState } from 'react'

import useDraggableX from 'hooks/useDraggableX'

import styles from './styles.module.scss'

const Slider = ({
    prev,
    next,
    curr,
    // dragPower,
    onSlideLeft,
    onSlideRight,
    sensitiviy = 1,
    dragTransitionTimeMS = 300,
    dragTriggeredByPercentOfWidth = 15,
    withFadedSidesDuringDrag = false,
}: {
    prev: ReactNode
    curr: ReactNode
    next: ReactNode
    // dragPower: number
    onSlideLeft: () => void
    onSlideRight: () => void
    sensitiviy?: number
    dragTransitionTimeMS?: number
    // how much % must be dragged before page auto scrolls to next slide?
    dragTriggeredByPercentOfWidth?: number
    withFadedSidesDuringDrag?: boolean
}) => {
    const [translateXBy, setTranslateXBy] = useState(0),
        onDragOngoing = useCallback((ref: RefObject<HTMLDivElement>, currentX: number) => {
            setTranslateXBy(currentX)
        }, []),
        onDragLeft = useCallback(
            (ref: RefObject<HTMLDivElement>) => {
                let eligibleToGoNextSlide = false

                setTranslateXBy((prev) => {
                    const width = ref.current?.offsetWidth!
                    eligibleToGoNextSlide =
                        Math.abs(prev) > (dragTriggeredByPercentOfWidth * width) / 100
                    return eligibleToGoNextSlide ? -1 * width : 0
                })

                setTimeout(() => {
                    setTranslateXBy(0)
                    eligibleToGoNextSlide && onSlideLeft()
                }, dragTransitionTimeMS)
            },
            [onSlideLeft, dragTransitionTimeMS, dragTriggeredByPercentOfWidth]
        ),
        onDragRight = useCallback(
            (ref: RefObject<HTMLDivElement>) => {
                let eligibleToGoNextSlide = false

                setTranslateXBy((prev) => {
                    const width = ref.current?.offsetWidth!
                    eligibleToGoNextSlide =
                        Math.abs(prev) > (dragTriggeredByPercentOfWidth * width) / 100
                    return eligibleToGoNextSlide ? width : 0
                })

                setTimeout(() => {
                    setTranslateXBy(0)
                    eligibleToGoNextSlide && onSlideRight()
                }, dragTransitionTimeMS)
            },
            [onSlideRight, dragTransitionTimeMS, dragTriggeredByPercentOfWidth]
        ),
        { ref, props } = useDraggableX<HTMLDivElement>({
            onDragLeft,
            onDragRight,
            onDragOngoing,
            sensitiviy,
            dragTriggeredBy: 5,
        })

    return (
        <div
            data-id="sliderWrapper"
            className={styles.sliderWrapper}
            data-with-faded-sides={withFadedSidesDuringDrag && !!translateXBy}
        >
            <div
                data-id="slider"
                ref={ref}
                className={styles.slider}
                style={{
                    transform: `translateX(${translateXBy}px)`,
                    // remove transition anim for when we reset position on slide switched fully
                    transition: translateXBy ? `all ${dragTransitionTimeMS}ms` : 'none',
                }}
                {...props}
            >
                <div data-id="slide">{prev}</div>
                <div data-id="slide">{curr}</div>
                <div data-id="slide">{next}</div>
            </div>
        </div>
    )
}

export default Slider
