import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BurgerApp from './BurgerApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BurgerApp />
  </StrictMode>,
)
