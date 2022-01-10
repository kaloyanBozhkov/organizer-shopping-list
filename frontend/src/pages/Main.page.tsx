import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import StoreContext from 'context/Store.context'

import MainLayout from 'templates/MainLayout/Main.layout'

import LoginDialog from 'components/Dialogs/Login.dialog'
import Header from 'components/Header/Header'

const MainPage = () => {
    const { activeDialog } = useContext(StoreContext)

    return (
        <MainLayout header={<Header />} dialog={activeDialog ? <LoginDialog /> : null}>
            <Outlet />
        </MainLayout>
    )
}

export default MainPage
