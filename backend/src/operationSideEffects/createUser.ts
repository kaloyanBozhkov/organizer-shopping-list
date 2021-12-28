import { User } from '@prisma/client'

import type { GraphQLResponse, SideEffectFn } from './index'

// handle token creation and email sending
export const createUserSideEffect: SideEffectFn = async (resp) => {
    if (resp.errors) return

    const {
        data: {
            createUser: { email },
        },
    } = resp as GraphQLResponse<{ createUser: User }>

    console.log(email)

    // do stuff with email
}
