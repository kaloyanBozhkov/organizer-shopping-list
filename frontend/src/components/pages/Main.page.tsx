import React from 'react'

import { Outlet } from 'react-router-dom'

import Header from 'components/organisms/Header/Header'
import MainSideMenu from 'components/organisms/MainSideMenu/MainSideMenu.organism'

import GenericLayout from 'components/layouts/Generic/Generic.layout'
import MainLayout from 'components/layouts/Main/Main.layout'

import IndexModal from 'components/templates/modals/Index.modal'

const MainPage = () => {
    return (
        <GenericLayout sideContent={<p>ads content</p>}>
            <MainLayout header={<Header />} nav={<MainSideMenu />} modal={<IndexModal />}>
                <Outlet />
            </MainLayout>
        </GenericLayout>
    )
}

export default MainPage
