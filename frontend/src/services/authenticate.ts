import { serviceFetcher } from './common'

export type AuthenticationResponse = { jwt: string | null }

const authenticate = (
    payload: Record<'email' | 'password', string> | { tokenId: string }
): Promise<AuthenticationResponse['jwt']> =>
    serviceFetcher('authenticate', payload).then(({ jwt }) => {
        if (jwt) return jwt
        throw Error('Authentication failed, double-check your credentials :(')
    })

export default authenticate
