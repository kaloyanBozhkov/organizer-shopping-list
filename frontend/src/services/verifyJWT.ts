export type VerficiationResponseJWT = { verified: false } | { verified: true; userId: string }

const verifyJWT = (token: string): Promise<VerficiationResponseJWT> =>
    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT_URL}/validate/${token}`, {
        method: 'POST',
    }).then((resp) => resp.json())

export default verifyJWT
