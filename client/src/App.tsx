import {ApolloProvider} from "@apollo/client"
import {FC} from "react"
import {HelmetProvider} from "react-helmet-async"
import {BrowserRouter} from "react-router-dom"

import {ErrorBoundray} from "~components"
import {client} from "~apollo"

import Router from "~router/Router"

const App: FC = () => {
  return (
    <div className="App">
      <HelmetProvider>
        <ErrorBoundray>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ApolloProvider>
        </ErrorBoundray>
      </HelmetProvider>
    </div>
  )
}

export default App
