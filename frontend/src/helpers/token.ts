export const saveJWT = (jwt: string) => {
    window.localStorage.setItem('shoppingList_token', jwt)
}

export const removeJWT = () => {
    window.localStorage.removeItem('shoppingList_token')
}

export const getJWT = (): string | null => window.localStorage.getItem('shoppingList_token')
