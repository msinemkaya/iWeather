import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LocationContext = createContext({})
export const LocationContextProvider = ({ children }) => {
  const [ autocomplete, setAutocomplete ] = useState(null)
  const [ place, setPlace ] = useState('')
  const [ location, setLocation ] = useState([])
  const navigate = useNavigate()

  const navigateToWeatherPage = (lang, lat) => {
    navigate(`/weather/${lang}/${lat}`)
  }

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const places = autocomplete.getPlaces()
      const selected = places.length > 0 ? places[0].formatted_address : ''
      const lang = places[0].geometry.location.lng()
      const lat = places[0].geometry.location.lat()
      setPlace(selected)
      setLocation([ lang, lat ])
      navigateToWeatherPage(lang, lat)
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
  }

  return (
    <LocationContext.Provider value={exportedValues}>
      {children}
    </LocationContext.Provider>
  )
}
