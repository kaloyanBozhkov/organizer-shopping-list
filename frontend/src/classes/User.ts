export default class User {
    id: string

    email: string

    alias: string

    createdAt: string

    updatedAt: string

    constructor({
        id,
        email,
        alias,
        createdAt,
        updatedAt,
    }: {
        id: string
        email: string
        alias: string
        createdAt: string
        updatedAt: string
    }) {
        this.id = id
        this.email = email
        this.alias = alias
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
