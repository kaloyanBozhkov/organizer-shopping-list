import React, { ReactElement, useEffect } from 'react'

import { useReactiveVar } from '@apollo/client'

import jwtDecode from 'jwt-decode'

import { useGetUserLoginLazyQuery } from 'types/graphQL.generated'

import { tokenVar } from 'reactives/Token.reactive'
import { setLoggedInUser, setLoggedOutUser } from 'reactives/User.reactive'

import LoadingPage from 'components/pages/Loading.page'
import MainPage from 'components/pages/Main.page'

const MainContainer = (): ReactElement => {
    const token = useReactiveVar(tokenVar),
        [getUser, { loading }] = useGetUserLoginLazyQuery({
            onCompleted: ({ user }) => setLoggedInUser(user!),
            onError: () => {
                // do something with error
                setLoggedOutUser()
            },
        })

    useEffect(() => {
        if (token) {
            try {
                const {
                    user: { email },
                } = jwtDecode<{ user: { email: string } }>(token)

                getUser({ variables: { email } })
            } catch (err) {
                setLoggedOutUser()

                throw Error(
                    'There seems to have been an issue with the token used for authentication. You will have to sign in again :('
                )
            }
        }
    }, [token, getUser])

    if (loading) return <LoadingPage message="Loading user data.." />

    return <MainPage />
}

export default MainContainer
