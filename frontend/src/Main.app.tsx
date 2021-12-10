import React from 'react'

import MainAppProvider from 'context/providers/MainAppProvider'

import MainContainer from 'containers/Main.container'

import GenericLayout from 'templates/GenericLayout/Generic.layout'

const App = () => {
    return (
        <MainAppProvider>
            <GenericLayout>
                <MainContainer />
            </GenericLayout>
        </MainAppProvider>
    )
}

export default App
