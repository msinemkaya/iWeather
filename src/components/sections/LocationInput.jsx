import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api'
import { Input } from '../base/Input.jsx'
import { useMemo } from 'react'
import { useLocation } from '../../hooks/use-location.js'

export const LocationInput = () => {
  const libs = useMemo(() => ['places'], [])
  const {setAutocomplete, handlePlaceChanged, handleChange, place} = useLocation()

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_LOCATION_API_KEY} libraries={libs}>
      <StandaloneSearchBox onLoad={setAutocomplete} onPlacesChanged={handlePlaceChanged}>
        <Input type='text' placeholder='Search location' onChange={handleChange} value={place}/>
      </StandaloneSearchBox>
    </LoadScript>
  )
}
