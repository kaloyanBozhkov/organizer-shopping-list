// import components
// import templates
import Suspensify from 'hoc/Suspensify'

import React, { useContext } from 'react'

import StoreContext from 'context/Store.context'

import MainLayout from 'templates/MainLayout/Main.layout'

import Cart from 'components/Cart/Cart'
import LoginDialog from 'components/Dialogs/Login.dialog'
import Header from 'components/Header/Header'

const MainPage = () => {
    const { activeDialog } = useContext(StoreContext)

    return (
        <Suspensify message="Loading Items..." modifier="main">
            <MainLayout header={<Header />} dialog={activeDialog ? <LoginDialog /> : null}>
                <Cart />
            </MainLayout>
        </Suspensify>
    )
}

export default MainPage
