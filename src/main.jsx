import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LocationContextProvider } from './hooks/LocationContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocationContextProvider>
        <App/>
      </LocationContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
