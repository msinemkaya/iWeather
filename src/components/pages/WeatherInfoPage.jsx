import { WeatherDetails } from '../sections/WeatherDetails.jsx'
import { WeatherWeekly } from '../sections/WeatherWeekly.jsx'
import { WeatherInfoCard } from '../sections/WeatherInfoCard.jsx'

export const WeatherInfoPage = () => {
  return (
    <div className='p-2 space-y-2'>
      <WeatherInfoCard/>
      <WeatherDetails/>
      <WeatherWeekly/>
    </div>
  )
}
