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
        [getUser, { loading, error }] = useGetUserLoginLazyQuery({
            onCompleted: ({ user }) => setLoggedInUser(user!),
            onError: () => {
                // do something with error

                setLoggedOutUser()
            },
        })

    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode<{ user: { email: string } }>(token)
            getUser({ variables: { email: decodedToken.user.email } })
        }
    }, [token, getUser])

    if (loading) return <LoadingPage message="Loading user data.." />

    if (error) return <p>AAAAAA</p>

    return <MainPage />
}

export default MainContainer
