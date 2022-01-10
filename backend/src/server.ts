import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import jwt from 'jsonwebtoken'
import { buildSchema } from 'type-graphql'

import 'reflect-metadata'

import { resolvers } from '@generated/type-graphql'
import { PrismaClient } from '@prisma/client'

import authenticateEdnpoint from 'endpoints/authenticate.endpoint'
import validateJWT from 'endpoints/validateJWT.endpoint'

import confirmEmailEndpoint from './endpoints/confirmEmail.endpoint'
import attachOperationSideEffectsToResponse from './operationSideEffects/index'

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
            })
        )
        app.use(bodyParser.json())

        app.use(attachOperationSideEffectsToResponse(prisma))

        app.get('/', (req, res) => res.end('Welcome to API'))

        app.get('/confirm/:emailTokenId', confirmEmailEndpoint(prisma))

        app.post('/validate/:jwt', validateJWT)

        app.post('/authenticate', authenticateEdnpoint(prisma))

        app.listen({ port: 4000 }, () => console.log('listening on port 4000'))

        const server = new ApolloServer({
            schema,
            // make these available to all root values
            context: {
                prisma,
            },
            formatError: (err) => {
                console.log(err)
                return new Error('Internal server error')
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
