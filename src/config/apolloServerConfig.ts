import { ApolloServerOptions } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { Server } from 'http'

import typeDefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'

import ImagesAPI from '../dataSources/ImagesAPI'

export interface ApolloContext {
    token: string
    dataSources: {
        imagesAPI: ImagesAPI
    }
}

const apolloServerConfig = (httpServer: Server): ApolloServerOptions<ApolloContext> => ({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

export default apolloServerConfig
