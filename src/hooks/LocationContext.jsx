import { createContext, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

export const LocationContext = createContext({})

export const LocationContextProvider = ({ children }) => {
  const [ autocomplete, setAutocomplete ] = useState(null)
  const [ place, setPlace ] = useState('')
  const [ location, setLocation ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const navigate = useNavigate()

  const navigateToWeatherPage = (long, lat) => {
    navigate({
      pathname: '/weather',
      search: `?${createSearchParams({
        lat,
        long,
      })}`,
    })
  }

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const places = autocomplete.getPlaces()
      if (places.length !== 0) {
        setLoading(true)
        const selected = places.length > 0 ? places[0].formatted_address : ''
        const long = places[0].geometry.location.lng().toFixed(2)
        const lat = places[0].geometry.location.lat().toFixed(2)
        setPlace(selected)
        setLocation([ long, lat ])
        navigateToWeatherPage(long, lat)
        setAutocomplete(null)
        setError(null)
      } else {
        setError('Place does not exist, Please enter a valid location!')
      }
    } else {
      setError('Not loaded yet')
    }
    setLocation([])
    setPlace('')
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
    setLoading,
    loading,
    error,
    handleChange,
    handlePlaceChanged,
    navigateToWeatherPage,
  }

  return (
    <LocationContext.Provider value={exportedValues}>
      {children}
    </LocationContext.Provider>
  )
}
