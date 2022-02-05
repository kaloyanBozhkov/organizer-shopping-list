import React, { ReactElement } from 'react'

import GenericLayout from 'components/layouts/Generic/Generic.layout'

import MainPage from 'components/pages/Main.page'

const MainContainer = (): ReactElement => {
    // const { onGetShoppingItems } = useContext(ActionsContext),

    return (
        <GenericLayout>
            <MainPage />
        </GenericLayout>
    )
}

export default MainContainer
