import ShoppingItem from './ShoppingItem'

export default class Cart {
    shoppingItems: Record<ShoppingItem['id'], ShoppingItem>

    constructor() {
        this.shoppingItems = {}
    }

    addItem(item: ShoppingItem) {
        if (this.shoppingItems[item.id])
            throw Error(`Motherfucker wtf this "${item.id}" already exists`)

        this.shoppingItems[item.id] = item
    }

    removeItem(id: ShoppingItem['id']) {
        if (!Object.hasOwnProperty.call(this.shoppingItems, id))
            throw Error(`You fool, can't remove ${id} since it dont exist in the cart`)

        delete this.shoppingItems[id]
    }
}
