import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LoadScript } from '@react-google-maps/api'
import App from './App.jsx'

const googleApiKey = import.meta.env.VITE_LOCATION_API_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadScript googleMapsApiKey={googleApiKey} libraries={[ 'places' ]}>
      <App/>
    </LoadScript>
  </React.StrictMode>,
)
