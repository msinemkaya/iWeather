import { Card } from '../base/Card.jsx'
import { WeatherDetailRow } from '../common/WeatherDetailRow.jsx'
import { useLoaderData } from 'react-router-dom'
import { weatherDetails } from '../../utils/weather-details.js'

export const WeatherDetails = () => {
  const { responseInfoData } = useLoaderData()

  return (
    <Card className='px-4 py-1' data-testid='weather-details'>
      {weatherDetails(responseInfoData).map(detail => (
        <WeatherDetailRow key={detail.text} text={detail.text} icon={detail.icon} value={detail.value}/>
      ))}
    </Card>
  )
}
