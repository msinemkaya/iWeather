import { LogoFull } from '../base/LogoFull.jsx'
import { Input } from '../base/Input.jsx'
import { useState } from 'react'
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api'

const libs = [ 'places' ]
export const WelcomePage = () => {
  const [ autocomplete, setAutocomplete ] = useState(null)
  const [ place, setPlace ] = useState('')
  const [location, setLocation] = useState([])

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const places = autocomplete.getPlaces()
      const selected = places.length > 0 ? places[0].formatted_address : ''
      setPlace(selected)
      setLocation([places[0].geometry.location.lng(), places[0].geometry.location.lat()])
    console.log()
    } else {
      console.log('Not loaded yet!')
    }
  }
  const handleChange = (e) => {
    setPlace(e.target.value)
  }

  console.log(place)
  return (
    <>
      <div className='my-12 grid w-full fixed place-items-center'>
        <LogoFull/>
      </div>

      <div className='h-[50svh] flex flex-col justify-end'>
        <div className='text-center mb-8 '>
          <h1 className='heading md'>Welcome to <span className='text-blue-light'>TypeWeather</span></h1>
          <p className='text-gray-200 text-sm'>Choose a location to see the weather forecast</p>
        </div>

        <div className='mx-8'>
          <LoadScript googleMapsApiKey={import.meta.env.VITE_LOCATION_API_KEY} libraries={libs}>
            <StandaloneSearchBox onLoad={setAutocomplete} onPlacesChanged={handlePlaceChanged}>
              <Input type='text' placeholder='Search location' onChange={handleChange} value={place}/>
            </StandaloneSearchBox>
          </LoadScript>
        </div>
      </div>
    </>
  )
}
