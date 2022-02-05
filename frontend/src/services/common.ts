const tryParseOrReturnText = (txt: string) => {
    try {
        return JSON.parse(txt)
    } catch (e) {
        return txt
    }
}

export const serviceFetcher = (
    endpoint: string,
    bodyObj?: Record<string, string>,
    method = 'POST'
) =>
    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT_URL}/${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method,
        body: bodyObj ? JSON.stringify(bodyObj) : undefined,
    })
        .then((resp) => resp.text().then((txt) => Promise.resolve({ txt, status: resp.status })))
        .then(({ txt, status }) => {
            const parsedResp = tryParseOrReturnText(txt)

            if (status >= 400)
                return Promise.reject(
                    typeof parsedResp === 'string' ? Error(parsedResp) : parsedResp
                )

            return Promise.resolve(parsedResp)
        })
