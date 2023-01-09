import "./config/envConfig.mjs"
import "reflect-metadata"

import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'

import express from 'express'
import {createServer} from 'http'
import cors from 'cors'

import apolloConfig from './config/apolloConfig.mjs'
import expressConfig from './config/expressConfig.mjs'

const PORT = process.env.PORT

const app = express()

const httpServer = createServer(app)
const apolloServer = new ApolloServer(apolloConfig(httpServer))

await  apolloServer.start()

app.use('/graphql', cors(), express.json(), expressMiddleware(apolloServer, expressConfig))

await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve))
console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
