import { WeatherDetails } from '../sections/WeatherDetails.jsx'
import { WeatherWeekly } from '../sections/WeatherWeekly.jsx'
import { WeatherInfoCard } from '../sections/WeatherInfoCard.jsx'
import { SearchAnotherButton } from '../sections/SearchAnotherButton.jsx'
import { ErrorMessage } from '../common/ErrorMessage.jsx'

export const WeatherInfoPage = () => {
  // const { error } = useWeather()
  const error = null
  return (
    <div className='p-2 lg:max-w-screen-lg lg:mx-auto space-y-2'>
      {error ? (
        <ErrorMessage error={error}/>
      ) : (
        <>
          <WeatherInfoCard/>
          <WeatherDetails/>
          <WeatherWeekly/>
          <SearchAnotherButton/>
        </>
      )
      }
    </div>
  )
}
