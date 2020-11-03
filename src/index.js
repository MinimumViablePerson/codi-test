import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import 'github-markdown-css/github-markdown.css'

import App from './App'
import './styles.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_AUTH0_DOMAIN}
      clientId={process.env.REACT_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  rootElement
)
