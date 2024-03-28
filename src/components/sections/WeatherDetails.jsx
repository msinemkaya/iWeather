import { Card } from '../base/Card.jsx'
import { WeatherDetailRow } from '../common/WeatherDetailRow.jsx'

export const WeatherDetails = () => {
  return (
    <Card className='px-4 py-1'>
      <WeatherDetailRow/>
      <WeatherDetailRow/>
      <WeatherDetailRow/>
      <WeatherDetailRow/>
      <WeatherDetailRow/>
    </Card>
  )
}
