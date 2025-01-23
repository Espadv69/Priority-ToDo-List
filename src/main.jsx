import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/global.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <h1>Hello, world!</h1>
  </StrictMode>,
)
