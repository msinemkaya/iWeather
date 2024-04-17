import { WeatherDetails } from '../sections/WeatherDetails.jsx'
import { WeatherWeekly } from '../sections/WeatherWeekly.jsx'
import { WeatherInfoCard } from '../sections/WeatherInfoCard.jsx'
import { SearchAnotherButton } from '../sections/SearchAnotherButton.jsx'
import { useEffect } from 'react'
import { useLocation } from '../../hooks/use-location.js'

export const WeatherInfoPage = () => {
  const { setLoading } = useLocation()

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className='p-2 lg:max-w-screen-lg lg:mx-auto space-y-2'>
      <>
        <WeatherInfoCard/>
        <WeatherDetails/>
        <WeatherWeekly/>
        <SearchAnotherButton/>
      </>
    </div>
  )
}
