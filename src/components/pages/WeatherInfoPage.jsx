import { WeatherDetails } from '../sections/WeatherDetails.jsx'
import { WeatherWeekly } from '../sections/WeatherWeekly.jsx'
import { WeatherInfoCard } from '../sections/WeatherInfoCard.jsx'
import { SearchAnotherButton } from '../sections/SearchAnotherButton.jsx'
import { useWeather } from '../../hooks/use-weather.js'
import { Card } from '../base/Card.jsx'
export const WeatherInfoPage = () => {
  const {error} = useWeather()
  return (
    <div className='p-2 lg:max-w-screen-lg lg:mx-auto space-y-2'>
      {error ? (
        <Card>{error}</Card>
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
