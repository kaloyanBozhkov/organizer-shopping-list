const requestResetPassword = (email: string) =>
    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT_URL}/request-password-reset`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            email,
        }),
    })

export default requestResetPassword
