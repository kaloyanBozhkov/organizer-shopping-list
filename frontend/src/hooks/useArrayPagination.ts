import { useMemo, useState } from 'react'

const useArrayPagination = <T>({ arr, itemsCount }: { arr: T[]; itemsCount: number }) => {
    const [page, setPage] = useState(0),
        slicedArr = useMemo(
            () => arr.slice(page * itemsCount, (page + 1) * itemsCount),
            [page, itemsCount, arr]
        )

    return {
        slicedArr,
        setPage,
        currPage: page,
        pageCount: arr.length ? Math.round(arr.length / itemsCount) : 0,
    }
}

export default useArrayPagination
