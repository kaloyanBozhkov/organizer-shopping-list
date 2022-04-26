import { MouseEvent, RefObject, TouchEvent, useCallback, useRef } from 'react'

import { getTouchEventOffset } from 'helpers/utils.common'

// fns shared between click and touch
const common = {
    end: <T extends HTMLElement>({
        finalPosX,
        mousePosX,
        ref,
        onDragLeft,
        onDragRight,
    }: {
        finalPosX: number
        mousePosX: { current?: number }
        ref: RefObject<T>
        onDragLeft?: (ref: RefObject<T>) => void
        onDragRight?: (ref: RefObject<T>) => void
    }) => {
        // mouse leave uses same fn - ensure we return if no click was started
        if (!mousePosX.current) return

        const startPosX = mousePosX.current

        // eslint-disable-next-line
        mousePosX.current = undefined

        if (startPosX === finalPosX) return

        startPosX! > finalPosX ? onDragLeft?.(ref) : onDragRight?.(ref)

        // remove drag attr
        if (ref?.current?.getAttribute('data-drag-active') === 'true')
            ref?.current?.removeAttribute('data-drag-active')
    },
    move: <T extends HTMLElement>({
        currPosX,
        onDragOngoing,
        mousePosX,
        ref,
        dragTriggeredBy,
        sensitiviy,
    }: {
        currPosX: number
        onDragOngoing?: (ref: RefObject<T>, by: number) => void
        mousePosX: { current?: number }
        ref: RefObject<T>
        dragTriggeredBy: number
        sensitiviy: number
    }) => {
        if (onDragOngoing && mousePosX.current) {
            // add drag attr
            if (ref?.current?.getAttribute('data-drag-active') === null)
                ref?.current?.setAttribute('data-drag-active', 'true')

            const diff = Math.round(currPosX - mousePosX.current)

            if (diff % dragTriggeredBy === 0) onDragOngoing(ref, diff * sensitiviy)
        }
    },
}

type useDraggableXProps<T> = {
    onDragLeft?: (ref: RefObject<T>) => void
    onDragRight?: (ref: RefObject<T>) => void
    sensitiviy?: number
} & (
    | {
          onDragOngoing: (ref: RefObject<T>, movedBy: number) => void
          // how often is the onDragOngoing ran?
          dragTriggeredBy: number
      }
    | { onDragOngoing?: never; dragTriggeredBy?: never }
)

const useDraggableX = <T extends HTMLElement>({
    onDragLeft,
    onDragRight,
    onDragOngoing,
    dragTriggeredBy = 1,
    sensitiviy = 1,
}: useDraggableXProps<T>) => {
    const ref = useRef<T | null>(null),
        mousePosX = useRef<number | undefined>(),
        onMouseDown = useCallback(
            ({ nativeEvent: { offsetX } }: MouseEvent<T>) => (mousePosX.current = offsetX),
            []
        ),
        onMouseUp = useCallback(
            ({ nativeEvent: { offsetX: finalPosX } }: MouseEvent<T>) =>
                common.end({
                    finalPosX,
                    ref,
                    onDragLeft,
                    onDragRight,
                    mousePosX,
                }),
            [onDragLeft, onDragRight]
        ),
        ongoing = useCallback(
            ({ nativeEvent: { offsetX: currPosX } }: MouseEvent<T>) => {
                common.move({
                    currPosX,
                    onDragOngoing,
                    dragTriggeredBy,
                    sensitiviy,
                    ref,
                    mousePosX,
                })
            },
            [onDragOngoing, dragTriggeredBy, sensitiviy]
        ),
        onTouchStart = useCallback(
            (event: TouchEvent<T>) => (mousePosX.current = getTouchEventOffset(event).offsetX),
            []
        ),
        onTouchEnd = useCallback(
            (event: TouchEvent<T>) => {
                console.warn(event)
                const finalPosX = getTouchEventOffset(event).offsetX
                common.end({
                    finalPosX,
                    ref,
                    onDragLeft,
                    onDragRight,
                    mousePosX,
                })
            },
            [onDragLeft, onDragRight]
        ),
        onTouchMove = useCallback(
            (event: TouchEvent<T>) => {
                const currPosX = getTouchEventOffset(event).offsetX
                common.move({
                    currPosX,
                    onDragOngoing,
                    dragTriggeredBy,
                    sensitiviy,
                    ref,
                    mousePosX,
                })
            },
            [onDragOngoing, dragTriggeredBy, sensitiviy]
        )

    return {
        ref,
        ...(ref.current
            ? {
                  props: {
                      onTouchStart,
                      onTouchEnd,
                      onMouseDown,
                      onMouseUp,
                      onMouseLeave: onMouseUp,
                      onTouchCancel: onTouchEnd,
                      ...(onDragOngoing
                          ? {
                                onTouchMove,
                                onMouseMoveCapture: ongoing,
                            }
                          : {}),
                  },
              }
            : {}),
    }
}

export default useDraggableX
