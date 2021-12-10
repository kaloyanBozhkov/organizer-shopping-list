import BaseResource from './BaseResource'

export default class ObservableResource<D> extends BaseResource<D> {
    observers: {
        onNext: typeof ObservableResource.prototype.onNext
        onError: typeof ObservableResource.prototype.onError
    }[] = []

    constructor(promise: Promise<D>) {
        super()
        this.promise = promise
            .then((data) => this.onNext(data))
            .catch((error) => this.onError(error))
    }

    onNext(data: D) {
        this.status = 'success'
        this.data = data
        this.observers.forEach(({ onNext }) => typeof onNext === 'function' && onNext(data))
    }

    onError(error: string | Error) {
        this.status = 'error'
        this.error = error
        this.observers.forEach(({ onError }) => typeof onError === 'function' && onError(error))
    }

    observe(
        onNext: typeof ObservableResource.prototype.onNext,
        onError: typeof ObservableResource.prototype.onError
    ) {
        // create observer and keep pointer to ref in memory
        const observer = { onNext, onError }

        // add to arr of observers
        this.observers.push(observer)

        // callback fn that will clear the observer thanks to the closure providing access to the memory ref
        return () => {
            this.observers = this.observers.filter((other) => other !== observer)
        }
    }
}
