import 'reflect-metadata'

import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import generateAppConfig, { setupAppCRUDEndpoints } from 'generateAppConfig'
import { buildSchema } from 'type-graphql'

import { resolvers } from '@generated/type-graphql'
import { PrismaClient } from '@prisma/client'

import { getUserContext } from 'helpers/context/getUser.context'

const prisma = new PrismaClient(),
    setupAndRunServer = async () => {
        const schema = await buildSchema({
                resolvers,
                validate: false,
            }),
            app = express(),
            { middlewares, crud } = generateAppConfig(prisma)

        middlewares.forEach((m) => app.use(m))

        setupAppCRUDEndpoints(app, crud)

        app.listen({ port: 4000 }, () => console.log('listening on port 4000'))

        const server = new ApolloServer({
            schema,
            // make these available to all root values
            context: async ({ req }) => {
                const reqUser = await getUserContext(prisma, req.headers?.authorization)
                console.log(reqUser)
                return {
                    prisma,
                    ...(reqUser ? { reqUser } : {}),
                }
            },
            formatError: (err) => {
                console.log(err)
                return new Error(
                    process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
                )
            },
        })

        await server.start()

        server.applyMiddleware({
            app,
            // disable apollo cors to use app's cors midleware usage
            cors: false,
        })
    }

setupAndRunServer()
