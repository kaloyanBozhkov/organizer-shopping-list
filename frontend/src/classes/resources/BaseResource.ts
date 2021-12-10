export default class BaseResource<D> {
    status: 'pending' | 'success' | 'error' = 'pending'

    promise: Promise<void> | null = null

    data?: D = undefined

    error?: string | Error = undefined

    read() {
        switch (this.status) {
            case 'pending':
                throw this.promise
            case 'error':
                throw this.error
            default:
                return this.data as D
        }
    }
}
