import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CityPage from './CityPage/CityPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <CityPage/>
  </StrictMode>,
)
