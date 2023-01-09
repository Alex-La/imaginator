import { ApolloServerOptions } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { Server } from 'http'

import typeDefs from '../graphql/typeDefs.mjs'
import resolvers from '../graphql/resolvers.mjs'

export interface ApolloContext {
    token: string
}

const apolloConfig = (httpServer: Server): ApolloServerOptions<ApolloContext> => ({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

export default apolloConfig
