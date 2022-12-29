import {InMemoryCache, makeVar} from "@apollo/client"

export const isSidebarOpen = makeVar<boolean>(false)
export const adminAccessToken = makeVar<string>("")

const cache = new InMemoryCache()

export default cache
