import { useLayoutEffect, useState } from 'react'

import type ObservableResource from 'classes/resources/ObservableResource'

const useResource = <D>(resource: ObservableResource<D>) => {
    const [, forceUpdate] = useState(false)

    useLayoutEffect(
        () =>
            resource.observe(
                (data) => {
                    // eslint-disable-next-line
                    console.log('useResource received data', data)
                    forceUpdate((prev) => !prev)
                },
                (error) => {
                    console.error('useResource errored with', error)
                    forceUpdate((prev) => !prev)
                }
            ),
        [resource]
    )

    return resource.read()
}

export default useResource
