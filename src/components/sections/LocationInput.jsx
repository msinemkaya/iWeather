import { StandaloneSearchBox } from '@react-google-maps/api'
import { Input } from '../base/Input.jsx'
import { useLocation } from '../../hooks/use-location.js'
import { Loader } from '../base/Loader.jsx'

export const LocationInput = () => {
  const { setAutocomplete, handlePlaceChanged, handleChange, place, loading } = useLocation()

  return (
    <StandaloneSearchBox onLoad={setAutocomplete} onPlacesChanged={handlePlaceChanged}>
      <div className='relative' data-testid='location-input'>
        <Input type='text' placeholder='Search location' onChange={handleChange} value={place}/>
        {
          loading && (
            <Loader/>
          )
        }
      </div>
    </StandaloneSearchBox>
  )
}
