import BaseResource from './BaseResource'

export default class AsyncResource<D> extends BaseResource<D> {
    constructor(promise: Promise<D>) {
        super()
        this.promise = promise
            .then((data) => {
                this.status = 'success'
                this.data = data
            })
            .catch((error) => {
                this.status = 'error'
                this.error = error
            })
    }
}
