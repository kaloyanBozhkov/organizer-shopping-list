import { MouseEvent, RefObject, useCallback, useRef } from 'react'

const useDraggableX = <T extends HTMLElement>({
    onDragLeft,
    onDragRight,
    onDragOngoing,
    dragTriggeredBy = 1,
    sensitiviy = 1,
}: {
    onDragLeft?: (ref: RefObject<T>) => void
    onDragRight?: (ref: RefObject<T>) => void
    sensitiviy: number
} & (
    | {
          onDragOngoing: (ref: RefObject<T>, movedBy: number) => void
          // how often is the onDragOngoing ran?
          dragTriggeredBy: number
      }
    | { onDragOngoing?: never; dragTriggeredBy?: never }
)) => {
    const ref = useRef<T | null>(null),
        mousePosX = useRef<number | undefined>(),
        start = useCallback(
            ({ nativeEvent: { offsetX } }: MouseEvent<T>) => (mousePosX.current = offsetX),
            []
        ),
        end = useCallback(
            ({ nativeEvent: { offsetX: finalPosX } }: MouseEvent<T>) => {
                // mouse leave uses same fn - ensure we return if no click was started
                if (!mousePosX.current) return

                const startPosX = mousePosX.current

                mousePosX.current = undefined

                if (startPosX === finalPosX) return

                startPosX! > finalPosX ? onDragLeft?.(ref) : onDragRight?.(ref)

                // remove drag attr
                if (ref?.current?.getAttribute('data-drag-active') === 'true')
                    ref?.current?.removeAttribute('data-drag-active')
            },
            [onDragLeft, onDragRight]
        ),
        ongoing = useCallback(
            ({ nativeEvent: { offsetX: currPosX } }: MouseEvent<T>) => {
                if (onDragOngoing && mousePosX.current) {
                    // add drag attr
                    if (ref?.current?.getAttribute('data-drag-active') === null)
                        ref?.current?.setAttribute('data-drag-active', 'true')

                    const diff = currPosX - mousePosX.current

                    if (diff % dragTriggeredBy === 0)
                        onDragOngoing(ref, (currPosX - mousePosX.current) * sensitiviy)
                }
            },
            [onDragOngoing, dragTriggeredBy, sensitiviy]
        )

    return {
        ref,
        ...(ref.current
            ? {
                  props: {
                      onMouseDown: start,
                      //   onTouchStart: start,
                      onMouseUp: end,
                      onMouseLeave: end,
                      //   onTouchEnd: end,
                      ...(onDragOngoing
                          ? {
                                onMouseMoveCapture: ongoing,
                            }
                          : {}),
                  },
              }
            : {}),
    }
}

export default useDraggableX
