import type { Currency } from 'types/common.types'

export default class ShoppingItem {
    id: string

    name: string

    price: number

    currency: Currency

    shopName: string

    isPriority: boolean

    cartInfo: {
        quantity: number

        description?: string
    }

    constructor(
        id: ShoppingItem['id'],
        name: ShoppingItem['name'],
        price: ShoppingItem['price'],
        currency: ShoppingItem['currency'],
        shopName: ShoppingItem['shopName'],
        isPriority: ShoppingItem['isPriority'],
        cartInfo: ShoppingItem['cartInfo']
    ) {
        this.id = id
        this.name = name
        this.price = price
        this.currency = currency
        this.shopName = shopName
        this.isPriority = isPriority
        this.cartInfo = cartInfo
    }

    public static deleteShoppingItem() {
        console.warn('Deleting shopping item', this)
    }

    public static editShoppingItem(properties: Partial<typeof ShoppingItem>) {
        console.warn('Edit shopping item', { ...this, ...properties })
    }

    public static createShoppingItem(properties: typeof ShoppingItem) {
        console.warn('Creating shopping item', properties)
    }
}
