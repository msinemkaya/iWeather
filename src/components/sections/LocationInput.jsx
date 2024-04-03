import { StandaloneSearchBox } from '@react-google-maps/api'
import { Input } from '../base/Input.jsx'
import { useLocation } from '../../hooks/use-location.js'
import { Loader } from '../base/Loader.jsx'
import { LocationInputContainer } from './LocationInputContainer.jsx'

export const LocationInput = () => {
  const { setAutocomplete, handlePlaceChanged, handleChange, place, loading } = useLocation()

  return (
    <LocationInputContainer>
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
    </LocationInputContainer>
  )
}
