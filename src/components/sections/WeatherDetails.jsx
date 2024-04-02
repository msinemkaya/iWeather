import { Card } from '../base/Card.jsx'
import { WeatherDetailRow } from '../common/WeatherDetailRow.jsx'
import { useWeather } from '../../hooks/use-weather.js'

export const WeatherDetails = () => {
  const { weatherDetails } = useWeather()
  return (
    <Card className='px-4 py-1'>
      {weatherDetails().map(detail => (
        <WeatherDetailRow key={detail.text} text={detail.text} icon={detail.icon} value={detail.value}/>
      ))}
    </Card>
  )
}
