import { serviceFetcher } from './common'

export type VerficiationResponseJWT = { verified: false } | { verified: true; userId: string }

const verifyJWT = (token: string): Promise<VerficiationResponseJWT> =>
    serviceFetcher(`validate/${token}`)

export default verifyJWT
