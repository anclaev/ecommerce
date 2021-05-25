import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import './styles/index.sass'

import App from './App'

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.body
)
