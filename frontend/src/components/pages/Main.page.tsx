import React, { useContext } from 'react'

import { Outlet } from 'react-router-dom'

import StoreContext from 'context/Store.context'

import Header from 'components/organisms/Header/Header'

import GenericLayout from 'components/layouts/Generic/Generic.layout'
import MainLayout from 'components/layouts/Main/Main.layout'

import LoginModal from 'components/modals/Login.modal'

const MainPage = () => {
    const { activeModal } = useContext(StoreContext)

    return (
        <GenericLayout>
            <MainLayout header={<Header />} modal={activeModal ? <LoginModal /> : null}>
                <Outlet />
            </MainLayout>
        </GenericLayout>
    )
}

export default MainPage
