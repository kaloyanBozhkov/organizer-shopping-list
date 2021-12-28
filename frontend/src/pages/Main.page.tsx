import React, { Suspense, useContext } from 'react'

import StoreContext from 'context/Store.context'

import MainLayout from 'templates/MainLayout/Main.layout'

import Cart from 'components/Cart/Cart'
import LoginDialog from 'components/Dialogs/Login.dialog'
import Header from 'components/Header/Header'

const MainPage = () => {
    const { activeDialog } = useContext(StoreContext)

    return (
        <MainLayout header={<Header />} dialog={activeDialog ? <LoginDialog /> : null}>
            <Suspense fallback={<p>Loading</p>}>
                <Cart />
            </Suspense>
        </MainLayout>
    )
}

export default MainPage
