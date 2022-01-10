import { GraphQLRequest } from 'apollo-server-express/node_modules/apollo-server-types'
import { Request } from 'express'

import { PrismaClient } from '@prisma/client'

import { getPasswordHashSalt } from 'helpers/password'
import { hasUnconfirmedEmailAddressAndConfirmationLinkHasExpired } from 'helpers/tokens'

const editGraphQLRequestToHaveHashAndSaltFromPassword = (password: string, graphQLRequest) => {
        const { hash, salt } = getPasswordHashSalt(password),
            editedGraphQLRequest = {
                ...graphQLRequest,
                variables: {
                    ...graphQLRequest.variables,
                    salt,
                    password: hash,
                },
                // add salt and new hash to Mutation
                query: graphQLRequest.query
                    ?.replace('$password: String!', '$password: String!, $salt: String!')
                    ?.replace('hash: $password', 'hash: $password, salt: $salt'),
            }

        return editedGraphQLRequest
    },
    /**
     * Gets a addUser Mutation body and updates it to have salt and hash from the provided passwrod inside variables
     */
    createUserSideEffectRequest = async (
        req: Request,
        graphQLRequest: GraphQLRequest,
        prisma: PrismaClient
    ): Promise<GraphQLRequest> => {
        const { password, email } = graphQLRequest.variables as Record<string, string>

        if (await hasUnconfirmedEmailAddressAndConfirmationLinkHasExpired(email, prisma)) {
            await prisma.token.deleteMany({
                where: {
                    user: {
                        email,
                    },
                },
            })

            await prisma.user.delete({
                where: {
                    email,
                },
            })
        }

        return editGraphQLRequestToHaveHashAndSaltFromPassword(password, graphQLRequest)
    }

export default createUserSideEffectRequest
