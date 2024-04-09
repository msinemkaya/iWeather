import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LocationContextProvider } from './hooks/LocationContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { WeatherContextProvider } from './hooks/WeatherContext.jsx'
import { LoadScript } from '@react-google-maps/api'
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const googleApiKey = import.meta.env.VITE_LOCATION_API_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadScript googleMapsApiKey={googleApiKey} libraries={[ 'places' ]}>
      <BrowserRouter>
        <WeatherContextProvider apiKey={weatherApiKey}>
          <LocationContextProvider>
            <App/>
          </LocationContextProvider>
        </WeatherContextProvider>
      </BrowserRouter>
    </LoadScript>
  </React.StrictMode>,
)
