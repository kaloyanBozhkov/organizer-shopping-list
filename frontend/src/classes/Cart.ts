import { ListItem } from 'types/graphQL.generated'

export default class Cart {
    listItems: Record<ListItem['id'], ListItem>

    constructor() {
        this.listItems = {}
    }

    addItem(item: ListItem) {
        if (this.listItems[item.id])
            throw Error(`Motherfucker wtf this "${item.id}" already exists`)

        this.listItems[item.id] = item
    }

    removeItem(id: ListItem['id']) {
        if (!Object.hasOwnProperty.call(this.listItems, id))
            throw Error(`You fool, can't remove ${id} since it dont exist in the cart`)

        delete this.listItems[id]
    }
}
