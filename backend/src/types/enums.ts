export enum DatabaseColumns {
    PRICE = 'price',
    CREATED = 'created',
    SHOP_NAME = 'shopName',
    PRODUCT_NAME = 'productName',
    IMPORTANCE = 'importance',
    IS_PURCHASED = 'purchased',
    ASCENDING = 'ASC',
    DESCENDING = 'DESC',
}

// export all enums here so code generatoer will pick the up and map to our grapqhl enums
export enum SortListItemsBy {
    price = 'PRICE',
    created = 'CREATED',
    shopName = 'SHOP_NAME',
    productName = 'PRODUCT_NAME',
    importance = 'IMPORTANCE',
    isPurchased = 'IS_PURCHASED',
}

export enum SortDirection {
    ascending = 'ASCENDING',
    descending = 'DESCENDING',
}

export enum Currency {
    bgn = 'BGN',
    usd = 'USD',
    gbp = 'GBP',
    eur = 'EUR',
}
