import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api'
import { Input } from '../base/Input.jsx'
import { useMemo, useState } from 'react'

export const LocationInput = () => {
  const libs = useMemo(() => ['places'], [])

  const [ autocomplete, setAutocomplete ] = useState(null)
  const [ place, setPlace ] = useState('')
  const [location, setLocation] = useState([])

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const places = autocomplete.getPlaces()
      const selected = places.length > 0 ? places[0].formatted_address : ''
      setPlace(selected)
      setLocation([places[0].geometry.location.lng(), places[0].geometry.location.lat()])
    } else {
      console.log('Not loaded yet!')
    }
  }
  const handleChange = (e) => {
    setPlace(e.target.value)
  }
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_LOCATION_API_KEY} libraries={libs}>
      <StandaloneSearchBox onLoad={setAutocomplete} onPlacesChanged={handlePlaceChanged}>
        <Input type='text' placeholder='Search location' onChange={handleChange} value={place}/>
      </StandaloneSearchBox>
    </LoadScript>
  )
}
