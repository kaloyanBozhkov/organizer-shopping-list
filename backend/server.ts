import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import express from 'express'
// allow .graphql to be imported in ts friendly way
import 'graphql-import-node'
import expressPlayground from 'graphql-playground-middleware-express'

import { ResolversContext } from 'types/context'

import connection, { queryDB } from './src/databaseConnection'
import rootValue from './src/graphql/rootValue'
import typeDefs from './src/graphql/typeDefs.graphql'

const setupAndRunServer = async () => {
    const app = express()

    // Enable All CORS Requests
    app.use(cors())

    app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

    app.get('/', (req, res) => res.end('Welcome to API'))

    app.listen({ port: 4000 }, () => console.log('listening on port 4000'))

    const server = new ApolloServer({
        typeDefs,
        rootValue,
        // make these available to all root values
        context: {
            connection,
            queryDB,
        } as ResolversContext,
    })

    await server.start()

    server.applyMiddleware({ app })
}

// start the connection to DB
connection.connect((error) => {
    if (error) console.error(error)
    console.log('connected to DB successfully!')

    setupAndRunServer()
})
