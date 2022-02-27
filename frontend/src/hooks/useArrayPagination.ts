import { useMemo, useState } from 'react'

const useArrayPagination = <T>({
    arr,
    itemsCount: itemsCountMinusOne,
    withPrevSlice,
    withNextSlice,
}: {
    arr: T[]
    itemsCount: number
    withPrevSlice?: boolean
    withNextSlice?: boolean
}) => {
    const itemsCount = itemsCountMinusOne - 1 < 1 ? 1 : itemsCountMinusOne,
        pageCount = arr.length ? Math.round(arr.length / itemsCount) : 0,
        [currPage, setPage] = useState(0),
        { currSlice, prevSlice, nextSlice } = useMemo(() => {
            const currSliceFrom = currPage * itemsCount,
                currSliceTo = (currPage + 1 > pageCount ? 0 : currPage + 1) * itemsCount

            return {
                currSlice: arr.slice(currSliceFrom, currSliceTo),
                ...(withPrevSlice
                    ? {
                          prevSlice:
                              currPage > 0
                                  ? arr.slice(currSliceFrom - itemsCount, currSliceFrom)
                                  : arr.slice(
                                        Math.floor(arr.length / itemsCount) * itemsCount -
                                            itemsCount
                                    ),
                      }
                    : {}),
                ...(withNextSlice
                    ? {
                          nextSlice:
                              currPage < pageCount - 1
                                  ? arr.slice(currSliceTo, currSliceTo + itemsCount)
                                  : arr.slice(0, itemsCount),
                      }
                    : {}),
            }
        }, [currPage, itemsCount, arr, withPrevSlice, withNextSlice, pageCount])

    return {
        currSlice,
        prevSlice,
        nextSlice,
        setPage,
        currPage,
        pageCount,
        goPrevPage: () => setPage(currPage === 0 ? pageCount - 1 : currPage - 1),
        goNextPage: () => setPage(currPage === pageCount - 1 ? 0 : currPage + 1),
    }
}

export default useArrayPagination
