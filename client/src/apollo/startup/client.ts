import {ApolloClient} from "@apollo/client"

import cache from "./cache"

const URI = "http://localhost:4000/graphql"

const client = new ApolloClient({
  uri: URI,
  cache,
})

export default client
