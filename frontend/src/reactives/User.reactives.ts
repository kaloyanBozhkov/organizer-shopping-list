import { GetUserLoginQuery } from 'types/graphQL.generated'

import User from 'classes/User'

import { makeVar } from '@apollo/client'

export const userVar = makeVar<null | User>(null)

export const setLoggedInUser = (user: NonNullable<GetUserLoginQuery['user']>) =>
    userVar(new User(user))
