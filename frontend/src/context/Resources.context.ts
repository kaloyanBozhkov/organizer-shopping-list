import { createContext } from 'react'

import ObservableResource from 'classes/resources/ObservableResource'

import getShoppingItems from 'services/getShoppingItems'

// start fetching ASAP, before components render even
const shoppingItemsResource = new ObservableResource(getShoppingItems())

type ResourceContextType = {
    shoppingItemsResource: typeof shoppingItemsResource
}

const ResourcesContext = createContext({
    shoppingItemsResource,
} as ResourceContextType)

export default ResourcesContext
