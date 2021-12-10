import type { ListItem, Resolvers } from 'types/resolversTypes.generated'

const rootValue: Resolvers = {
    Query: {
        allListItems: async (_, { sortBy, sortDirection }, { queryDB }) =>
            queryDB<ListItem[]>(
                `SELECT * FROM products ORDER BY ${sortBy} SORT BY ${sortDirection}`
            ),
    },
}

export default rootValue
