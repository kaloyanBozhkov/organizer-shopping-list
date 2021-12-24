import React from 'react'

import { SortDirection, SortListItemsBy, useGetAllListItemsQuery } from 'types/graphQL.generated'

import ListItemCard from 'components/ListItemCard/ListItemCard'

import { Grid } from '@mui/material'

import styles from './styles.module.scss'

const Cart = () => {
    const { data } = useGetAllListItemsQuery(
        { input: { sortBy: SortListItemsBy.importance, sortDirection: SortDirection.ascending } },
        { suspense: true }
    )

    return (
        <Grid className={styles.cart}>
            {data?.allListItems.map((listItem) => (
                <ListItemCard key={listItem.id} {...listItem} />
            ))}
        </Grid>
    )
}

export default Cart
