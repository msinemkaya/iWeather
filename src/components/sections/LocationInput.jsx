import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api'
import { Input } from '../base/Input.jsx'
import { useMemo } from 'react'
import { useLocation } from '../../hooks/use-location.js'
import { Loader } from '../base/Loader.jsx'

export const LocationInput = () => {
  const libs = useMemo(() => [ 'places' ], [])
  const { setAutocomplete, handlePlaceChanged, handleChange, place, loading } = useLocation()

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_LOCATION_API_KEY} libraries={libs}>
      <StandaloneSearchBox onLoad={setAutocomplete} onPlacesChanged={handlePlaceChanged}>
        <div className='relative'>
          <Input type='text' placeholder='Search location' onChange={handleChange} value={place}/>
          {
            loading && (
              <Loader/>
            )
          }
        </div>
      </StandaloneSearchBox>
    </LoadScript>
  )
}
