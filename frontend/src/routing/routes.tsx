import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import AccessAreaContainer from 'containers/AccessArea.container'
import MainContainer from 'containers/Main.container'

import NotFoundPage from 'pages/NotFound.page'

import LoginForm from 'components/Access/LoginForm/LoginForm'
import PasswordResetForm from 'components/Access/PasswordResetForm/PasswordResetForm'
import RegistrationForm from 'components/Access/RegistrationForm/RegistrationForm'

import Authorized from './Authorized/Authorized'

export type RouteConfig = {
    path: string
    element: ReactElement<{ children: RouteConfig[] }>
    children: RouteConfig[]
}

const routes: RouteConfig[] = [
    {
        path: '/',
        element: (
            <Authorized>
                <MainContainer />
            </Authorized>
        ),
        children: [],
    },
    {
        path: '/access',
        element: <AccessAreaContainer />,
        children: [
            {
                path: 'login',
                element: <LoginForm />,
                children: [],
            },
            {
                path: 'register',
                element: <RegistrationForm />,
                children: [],
            },
            {
                path: 'password-reset',
                element: <PasswordResetForm />,
                children: [],
            },
            {
                path: '',
                element: <Navigate replace to="login" />,
                children: [],
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage />,
        children: [],
    },
]

export default routes
