import React, { ReactElement } from 'react'

import MainPage from 'pages/Main.page'

import GenericLayout from 'templates/GenericLayout/Generic.layout'

const MainContainer = (): ReactElement => {
    // const { onGetShoppingItems } = useContext(ActionsContext),

    return (
        <GenericLayout>
            <MainPage />
        </GenericLayout>
    )
}

export default MainContainer
