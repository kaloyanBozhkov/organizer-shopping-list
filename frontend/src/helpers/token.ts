export const saveJWT = (jwt: string) => {
    window.localStorage.setItem('shoppingList_token', jwt)
}

export const getJWT = (): string | null => window.localStorage.getItem('shoppingList_token')
