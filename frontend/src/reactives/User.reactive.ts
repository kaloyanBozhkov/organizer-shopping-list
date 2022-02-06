import { makeVar } from '@apollo/client'

import { GetUserLoginQuery } from 'types/graphQL.generated'

import User from 'classes/User'

import { setUnauthenticatedUser } from './Token.reactive'

export const userVar = makeVar<null | User>(null)

export const setLoggedInUser = (user: NonNullable<GetUserLoginQuery['user']>) =>
    userVar(new User(user))

export const setLoggedOutUser = () => {
    userVar(null)
    setUnauthenticatedUser()
}
