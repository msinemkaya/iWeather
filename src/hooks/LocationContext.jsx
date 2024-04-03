import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeather } from './use-weather.js'

export const LocationContext = createContext({})

export const LocationContextProvider = ({ children }) => {
  const [ autocomplete, setAutocomplete ] = useState(null)
  const [ place, setPlace ] = useState('')
  const [ location, setLocation ] = useState([])
  const [loading, setLoading] = useState(false)
  const { fetchWeatherData } = useWeather()
  const navigate = useNavigate()

  const navigateToWeatherPage = (long, lat) => {
    navigate(`/weather/${long}/${lat}`)
  }

  const handlePlaceChanged = async () => {
    setLoading(true)
    if (autocomplete !== null) {
      const places = autocomplete.getPlaces()
      const selected = places.length > 0 ? places[0].formatted_address : ''
      const long = places[0].geometry.location.lng().toFixed(2)
      const lat = places[0].geometry.location.lat().toFixed(2)
      setPlace(selected)
      setLocation([ long, lat ])
      await fetchWeatherData(lat, long)
      navigateToWeatherPage(long, lat)
      setLoading(false)
    } else {
      console.log('Not loaded yet!')
    }
  }

  const handleChange = (e) => {
    setPlace(e.target.value)
  }

  const exportedValues = {
    location,
    place,
    autocomplete,
    setAutocomplete,
    setPlace,
    setLocation,
    handleChange,
    handlePlaceChanged,
    loading
  }

  return (
    <LocationContext.Provider value={exportedValues}>
      {children}
    </LocationContext.Provider>
  )
}
