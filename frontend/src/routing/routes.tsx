import React, { ReactElement } from 'react'

import { Navigate } from 'react-router-dom'

import ConfirmedEmail from 'components/templates/AccessArea/ConfirmedEmail/ConfirmedEmail.template'
import LoginForm from 'components/templates/AccessArea/LoginForm/LoginForm.template'
import RegistrationForm from 'components/templates/AccessArea/RegistrationForm/RegistrationForm.template'
import RegistrationSuccess from 'components/templates/AccessArea/RegistrationSuccess/RegistrationSuccess.template'
import RequestPasswordResetForm from 'components/templates/AccessArea/RequestPasswordResetForm/RequestPasswordResetForm.template'
import RequestPasswordResetSuccess from 'components/templates/AccessArea/RequestPasswordResetSuccess/RequestPasswordResetSuccess.template'
import PasswordResetForm from 'components/templates/AccessArea/ResetPasswordForm/ResetPasswordForm.template'
import PasswordResetSuccess from 'components/templates/AccessArea/ResetPasswordSuccess/ResetPasswordSuccess.template'

import NotFoundPage from 'components/pages/NotFound.page'

import AccessAreaContainer from 'containers/AccessArea.container'
import ItemsContainer from 'containers/Items.container'
import MainContainer from 'containers/Main.container'

import SignedInGate from './Gates/SignedIn.gate'
import SignedOutGate from './Gates/SignedOut.gate'

export type RouteConfig = {
    path: string
    element: ReactElement<{ children: RouteConfig[] }>
    children: RouteConfig[]
}

const routes: RouteConfig[] = [
    {
        path: '/',
        element: (
            <SignedInGate>
                <MainContainer />
            </SignedInGate>
        ),
        children: [
            {
                path: '/items',
                element: <ItemsContainer />,
                children: [],
            },
        ],
    },
    {
        path: '/access',
        element: (
            <SignedOutGate>
                <AccessAreaContainer />
            </SignedOutGate>
        ),
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
                path: 'password-reset/:emailTokenId',
                element: <PasswordResetForm />,
                children: [
                    {
                        path: 'success',
                        element: <PasswordResetSuccess />,
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
