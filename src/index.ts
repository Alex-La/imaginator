import "reflect-metadata"
import "./config/envConfig"

import {ApolloServer} from "@apollo/server"
import {expressMiddleware} from "@apollo/server/express4"

import express from "express"
import http from "http"
import cors from "cors"
import apolloServerConfig, {ApolloContext} from "./config/apolloServerConfig"
import appDataSource from "./appDataSource"

const PORT = process.env.PORT

async function start() {
  await appDataSource.initialize()

  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer<ApolloContext>(apolloServerConfig(httpServer))

  await server.start()

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({req}) => ({token: req.headers.token}),
    }),
  )

  await new Promise<void>(resolve => httpServer.listen({port: PORT}, resolve))
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
}

start()
