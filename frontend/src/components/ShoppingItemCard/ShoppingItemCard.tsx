import React from 'react'

import type ShoppingItem from 'classes/ShoppingItem'

import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'

import styles from './styles.module.scss'

const ShoppingItemCard = ({
    name,
    price,
    currency,
    shopName,
    isPriority,
    cartInfo: { quantity } = { quantity: 1 },
}: ShoppingItem) => {
    return (
        <div className={styles.shoppingItemCard} data-priority={isPriority}>
            <p className={styles.title}>{name}</p>
            <p className={styles.quantity}>{quantity}</p>
            <p className={styles.shopName}>{shopName}</p>
            <p className={styles.price}>
                {quantity * price} <span>{currency}</span>
            </p>
            <div className={styles.button}>
                <Button>
                    <CloseIcon />
                </Button>
            </div>
        </div>
    )
}

export default ShoppingItemCard
