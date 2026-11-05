import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Titulo from './Componets/Titulo/Titulo.jsx'

createRoot(document.getElementById('Shaiel')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
