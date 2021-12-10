import React, { useContext } from 'react'

import ResourcesContext from 'context/Resources.context'

import useResource from 'hooks/useResource'

import ShoppingItemCard from 'components/ShoppingItemCard/ShoppingItemCard'

import { Grid } from '@mui/material'

import styles from './styles.module.scss'

const Cart = () => {
    const { shoppingItemsResource } = useContext(ResourcesContext),
        {
            data: { shoppingItems },
        } = useResource(shoppingItemsResource)

    return (
        <Grid className={styles.cart}>
            {/* {cart.map((shoppingItemId) => (
                <ShoppingItemCard key={shoppingItemId} {...shoppingItems[shoppingItemId]} />
            ))} */}
            {shoppingItems.map((item) => (
                <ShoppingItemCard key={item.id} {...item} />
            ))}
        </Grid>
    )
}

export default Cart
