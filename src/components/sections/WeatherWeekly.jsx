import { Card } from '../base/Card.jsx'
import { WeatherDayCol } from '../common/WeatherDayCol.jsx'
import { useWeather } from '../../hooks/use-weather.js'

export const WeatherWeekly = () => {
  const { weekly } = useWeather()
  return (
    <Card className='flex snap-x scroll-smooth scrollbar-hidden overflow-y-auto flex-1 p-4'>
      {weekly.list.map((item, index) => (
        <WeatherDayCol key={index} low={Math.round(item.temp.min)} high={Math.round(item.temp.max)} day={new Date(item.dt*1000).toLocaleDateString('en-us', {weekday: 'short'})}/>
      ))}
    </Card>
  )
}
