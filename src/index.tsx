import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import './styles/index.sass'

import StoreProvider from './store'
import App from './App'

render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
  document.body
)
