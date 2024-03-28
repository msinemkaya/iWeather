import { Card } from '../base/Card.jsx'
import { WeatherDayCol } from '../common/WeatherDayCol.jsx'

export const WeatherWeekly = () => {
  return (
    <Card className='flex flex-1'>
      <WeatherDayCol/>
    </Card>
  )
}
