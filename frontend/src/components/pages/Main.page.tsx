import React, { useContext } from 'react'

import { Outlet } from 'react-router-dom'

import StoreContext from 'context/Store.context'

import Header from 'components/organisms/Header/Header'

import MainLayout from 'components/layouts/Main/Main.layout'

import LoginModal from 'components/modals/Login.modal'

const MainPage = () => {
    const { activeModal } = useContext(StoreContext)

    return (
        <MainLayout header={<Header />} modal={activeModal ? <LoginModal /> : null}>
            <Outlet />
        </MainLayout>
    )
}

export default MainPage
