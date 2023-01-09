import { ExpressMiddlewareOptions } from '@apollo/server/express4'
import type { WithRequired } from '@apollo/utils.withrequired'

import { ApolloContext } from './apolloConfig.mjs'

const expressConfig: WithRequired<ExpressMiddlewareOptions<ApolloContext>, 'context'> = {
    context: async ({ req }) => {
        const authHeader = req.header("Authorization")
        console.log(authHeader)
        return { token: '' }
    },
}

export default expressConfig
