import React from 'react'

import ListItemCard from 'components/ListItemCard/ListItemCard'

import { Grid } from '@material-ui/core'

import styles from './styles.module.scss'

const Cart = () => {
    const { data } = { data: [] as any[] }

    return (
        <Grid className={styles.cart}>
            {data?.map((listItem) => (
                <ListItemCard key={listItem.id} {...listItem} />
            ))}
        </Grid>
    )
}

export default Cart
