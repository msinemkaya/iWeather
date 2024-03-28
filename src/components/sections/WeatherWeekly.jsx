import { Card } from '../base/Card.jsx'
import { WeatherDayCol } from '../common/WeatherDayCol.jsx'

export const WeatherWeekly = () => {
  return (
    <Card className='flex snap-x scroll-smooth scrollbar-hidden overflow-y-auto flex-1 p-4'>
      <WeatherDayCol/>
      <WeatherDayCol/>
      <WeatherDayCol/>
      <WeatherDayCol/>
      <WeatherDayCol/>
      <WeatherDayCol/>
      <WeatherDayCol/>
    </Card>
  )
}
