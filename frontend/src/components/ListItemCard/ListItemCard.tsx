import React from 'react'

import { ListItem } from 'types/graphQL.generated'

import { Button } from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close'

import styles from './styles.module.scss'

type ListItemCardProps = {
    name: ListItem['product']['name']
    price: ListItem['product']['price']
    currency: ListItem['product']['currency']
    inShops: ListItem['product']['inShops']
    isPurchased: ListItem['isPurchased']
    importance: ListItem['importance']
    quantity: ListItem['quantity']
}

const ListItemCard = ({
    name,
    price,
    currency,
    inShops,
    isPurchased,
    importance,
    quantity,
}: ListItemCardProps) => {
    return (
        <div
            className={styles.lisItemCard}
            data-priority={importance}
            data-is-purchased={isPurchased}
        >
            <p className={styles.title}>{name}</p>
            <p className={styles.quantity}>{quantity}</p>
            <p className={styles.shopName}>{inShops[0]?.shop?.shopName}</p>
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

export default ListItemCard
