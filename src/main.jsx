import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/barlow/300.css'
import '@fontsource/barlow/400.css'
import '@fontsource/barlow-semi-condensed/700.css'
import '@fontsource/barlow-semi-condensed/800.css'
import '@fontsource/playfair-display/800-italic.css'

import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)