import { StrictMode } from 'react'
import { render } from 'react-dom'

import './index.sass'
import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.body
)
