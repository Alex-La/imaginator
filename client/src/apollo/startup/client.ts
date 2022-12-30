import {ApolloClient, from, HttpLink} from "@apollo/client"
import {onError} from "@apollo/client/link/error"
import {toast} from "react-hot-toast"

import cache from "./cache"

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({message, locations, path}) => {
      toast.error(message)
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  if (networkError) {
    toast.error(networkError.message)
    console.log(`[Network error]: ${networkError}`)
  }
})

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_CLIENT_API_URL,
})

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
})

export default client
