import "./config/envConfig"
import "reflect-metadata"

import {ApolloServer} from "@apollo/server"
import {expressMiddleware} from "@apollo/server/express4"

import express from "express"
import http from "http"
import cors from "cors"

import apolloServerConfig, {ApolloContext} from "./config/apolloServerConfig"
import dbConfig from "./config/dbConfig"

import ImagesAPI from "./dataSources/ImagesAPI"
import ImageEntity from "./entities/Image"

const PORT = process.env.API_PORT

async function start() {
  await dbConfig.initialize()

  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer<ApolloContext>(apolloServerConfig(httpServer))

  await server.start()

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({req}) => {
        const token = req.headers.authorization || ""

        const imagesRepository = dbConfig.getRepository(ImageEntity)

        return {
          token,
          dataSources: {
            imagesAPI: new ImagesAPI(imagesRepository),
          },
        }
      },
    }),
  )

  await new Promise<void>(resolve => httpServer.listen({port: PORT}, resolve))
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
}

start()
