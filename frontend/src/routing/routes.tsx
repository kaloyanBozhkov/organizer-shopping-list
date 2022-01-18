import React, { ReactElement } from 'react'

import { Navigate } from 'react-router-dom'

import AccessAreaContainer from 'containers/AccessArea.container'
import MainContainer from 'containers/Main.container'

import NotFoundPage from 'pages/NotFound.page'

import ConfirmedEmail from 'components/Access/ConfirmedEmail/ConfirmedEmail'
import LoginForm from 'components/Access/LoginForm/LoginForm'
import RegistrationForm from 'components/Access/RegistrationForm/RegistrationForm'
import RegistrationSuccess from 'components/Access/RegistrationSuccess/RegistrationSuccess'
import RequestPasswordResetForm from 'components/Access/RequestPasswordResetForm/RequestPasswordResetForm'
import RequestPasswordResetSuccess from 'components/Access/RequestPasswordResetSuccess/RequestPasswordResetSuccess'
import PasswordResetForm from 'components/Access/ResetPasswordForm/ResetPasswordForm'

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
                children: [
                    {
                        path: 'success',
                        element: <RegistrationSuccess />,
                        children: [],
                    },
                ],
            },
            {
                path: 'request-password-reset',
                element: <RequestPasswordResetForm />,
                children: [
                    {
                        path: 'success',
                        element: <RequestPasswordResetSuccess />,
                        children: [],
                    },
                ],
            },
            {
                path: 'password-reset/:jwt',
                element: <PasswordResetForm />,
                children: [
                    {
                        path: 'success',
                        element: <RequestPasswordResetSuccess />,
                        children: [],
                    },
                ],
            },
            {
                path: 'confirmed/:jwt',
                element: <ConfirmedEmail />,
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
