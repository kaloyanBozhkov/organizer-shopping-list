import fetchGraphQL from 'helpers/fetchGraphQL'

import ShoppingItem from 'classes/ShoppingItem'

const getShoppingItems = (): Promise<{ data: { shoppingItems: ShoppingItem[] } }> =>
    fetchGraphQL(`
        query getShoppingItems {
            shoppingItems{
                name
                id
                price
                currency
                ShopName: shop_name
            }
        }
    `).then((d) => d.json())

export default getShoppingItems
