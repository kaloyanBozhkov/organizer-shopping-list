import { makeVar } from '@apollo/client'

import { getJWT, removeJWT, saveJWT } from 'helpers/token'

export const tokenVar = makeVar<null | string>(getJWT())

export const setAuthenticatedUser = (jwt: string) => {
    saveJWT(jwt)
    tokenVar(jwt)
}

export const setUnauthenticatedUser = () => {
    removeJWT()
    tokenVar(null)
}
