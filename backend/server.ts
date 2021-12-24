import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import express from 'express'
import expressPlayground from 'graphql-playground-middleware-express'
import { buildSchema } from 'type-graphql'

import 'reflect-metadata'

import { resolvers } from '@generated/type-graphql'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(),
    setupAndRunServer = async () => {
        const schema = await buildSchema({
                resolvers,
                validate: false,
            }),
            app = express()

        // Enable All CORS Requests
        app.use(
            cors({
                origin: '*',
                optionsSuccessStatus: 200,
            })
        )

        app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

        app.get('/', (req, res) => res.end('Welcome to API'))

        app.listen({ port: 4000 }, () => console.log('listening on port 4000'))

        const server = new ApolloServer({
            schema,
            // make these available to all root values
            context: {
                prisma,
            },
        })

        await server.start()

        server.applyMiddleware({ app })
    }

setupAndRunServer()
