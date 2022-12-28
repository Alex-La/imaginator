import {ApolloServerOptions} from "@apollo/server"
import {ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer"
import {Server} from "http"

import typeDefs from "../graphql/typeDefs"
import resolvers from "../graphql/resolvers"

export interface ApolloContext {
  token?: string
}

const apolloServerConfig = (httpServer: Server): ApolloServerOptions<ApolloContext> => ({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
})

export default apolloServerConfig
