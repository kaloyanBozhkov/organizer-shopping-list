import React from 'react'

import { useAddUserMutation } from 'types/graphQL.generated'

import AccessAreaContext from 'context/AccessArea.context'

import AccessAreaPage from 'pages/AccessArea.page'

const AccessAreaContainer = () => {
    const addUserMutation = useAddUserMutation({
        onCompleted: (user) => console.warn(user),
    })

    return (
        <AccessAreaContext.Provider value={{ addUserMutation }}>
            <AccessAreaPage />
        </AccessAreaContext.Provider>
    )
}

export default AccessAreaContainer