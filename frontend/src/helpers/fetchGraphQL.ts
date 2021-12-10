const fetchGraphQL = (query: string) =>
    fetch(`${process.env.REACT_APP_ENDPOINT_URL}/graphql`, {
        method: 'POST',
        body: JSON.stringify({ query }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })

export default fetchGraphQL
