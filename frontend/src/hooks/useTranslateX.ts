import { useCallback, useState } from 'react'

const useTranslateX = ({ limit, startFrom = 0 }: { limit: number; startFrom?: number }) => {
    const [translateXBy, setTranslateXBy] = useState(startFrom),
        onMove = useCallback(
            (moveBy: number) =>
                setTranslateXBy((prevTranslateXBy) => {
                    if (limit > prevTranslateXBy) return startFrom + moveBy
                    return prevTranslateXBy
                }),
            [limit, startFrom]
        ),
        resetTranslateXBy = useCallback(() => setTranslateXBy(startFrom), [startFrom])

    return { onMove, translateXBy, resetTranslateXBy }
}

export default useTranslateX
