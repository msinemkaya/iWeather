import { WeatherDetails } from '../sections/WeatherDetails.jsx'
import { WeatherWeekly } from '../sections/WeatherWeekly.jsx'
import { WeatherInfoCard } from '../sections/WeatherInfoCard.jsx'
import { SearchAnotherButton } from '../sections/SearchAnotherButton.jsx'

export const WeatherInfoPage = () => {
  return (
    <div className='p-2 lg:max-w-screen-lg lg:mx-auto space-y-2'>
      <WeatherInfoCard/>
      <WeatherDetails/>
      <WeatherWeekly/>
      <SearchAnotherButton/>
    </div>
  )
}
