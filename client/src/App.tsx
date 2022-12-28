import {ApolloProvider} from "@apollo/client"
import {FC} from "react"
import {HelmetProvider} from "react-helmet-async"
import {BrowserRouter} from "react-router-dom"
import {Toaster} from "react-hot-toast"

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
      <Toaster position="top-right" />
    </div>
  )
}

export default App
