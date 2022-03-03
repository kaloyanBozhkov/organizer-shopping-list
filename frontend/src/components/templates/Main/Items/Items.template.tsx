import React from 'react'

import ActionsStack from 'components/molecules/ActionsStack/ActionsStack'

import ContentPageLayout from 'components/layouts/ContentPage/ContentPage.layout'

import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded'
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded'

const ItemsPage = ({
    onCreateNew,
    onFilter,
}: {
    onFilter: () => void
    onCreateNew: () => void
}) => {
    const btnDef = [
        {
            icon: FilterAltRoundedIcon,
            onClick: onFilter,
        },
        {
            icon: DriveFileRenameOutlineRoundedIcon,
            onClick: onCreateNew,
        },
    ]

    return (
        <ContentPageLayout>
            <ActionsStack
                withAnimation
                alignment="vertical"
                position="bottom-right"
                btnsDef={btnDef}
            />
        </ContentPageLayout>
    )
}

export default ItemsPage
