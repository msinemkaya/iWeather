import { createContext, useState } from 'react'

export const LocationContext = createContext()
export const LocationContextProvider = ({ children }) => {
  const [ autocomplete, setAutocomplete ] = useState(null)
  const [ place, setPlace ] = useState('')
  const [ location, setLocation ] = useState([])

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const places = autocomplete.getPlaces()
      const selected = places.length > 0 ? places[0].formatted_address : ''
      setPlace(selected)
      setLocation([ places[0].geometry.location.lng(), places[0].geometry.location.lat() ])
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
    handleChange,
    handlePlaceChanged,
  }

  return (
    <LocationContext.Provider value={exportedValues}>
      {children}
    </LocationContext.Provider>
  )
}
