import { saveJWT } from 'helpers/token'

export type AuthenticationResponse = { jwt: string | null }

const authenticate = ({
    email,
    password,
}: Record<'email' | 'password', string>): Promise<AuthenticationResponse> =>
    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT_URL}/authenticate`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then((resp) => resp.json())
        .then(({ jwt }) => {
            if (jwt) {
                saveJWT(jwt)
                return jwt
            }
            throw Error('Authentication failed, double-check your credentials :(')
        })

export default authenticate
