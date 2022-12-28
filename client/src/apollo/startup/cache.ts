import {InMemoryCache, makeVar} from "@apollo/client"

export const isSidebarOpen = makeVar<boolean>(false)

const cache = new InMemoryCache()

export default cache
