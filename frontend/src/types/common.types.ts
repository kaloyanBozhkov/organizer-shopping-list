export type Currency = 'USD' | 'EUR' | 'BGN'

export type Resource<D> = {
    read(): D | never
}
