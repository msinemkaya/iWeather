import { LogoFull } from '../base/LogoFull.jsx'
import { LocationInput } from '../sections/LocationInput.jsx'
import { ErrorMessage } from '../common/ErrorMessage.jsx'

export const WelcomePage = () => {
  return (
    <div className='xs:max-w-lg xs:mx-auto'>
      <div className='py-12 grid w-full fixed left-0 top-0 place-items-center'>
        <LogoFull/>
      </div>
      <div className='h-[50svh] flex flex-col justify-end'>
        <div className='text-center mb-8 '>
          <h1 className='heading md'>Welcome to <span className='text-blue-light'>TypeWeather</span></h1>
          <p className='text-gray-200 text-sm'>Choose a location to see the weather forecast</p>
        </div>
        <div className='mx-8'>
          <LocationInput/>
        </div>
      </div>
      <ErrorMessage/>
    </div>
  )
}
