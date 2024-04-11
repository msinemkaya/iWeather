import { Card } from '../base/Card.jsx'
import { WeatherDayCol } from '../common/WeatherDayCol.jsx'
import { useWeather } from '../../hooks/use-weather.js'
import { iconsAndBackground } from '../../utils/icons-and-background.js'

export const WeatherWeekly = () => {
  const { weekly } = useWeather()
  return (
    <Card className='flex snap-x scroll-smooth scrollbar-hidden overflow-y-auto flex-1 p-4' data-testid='weather-weekly'>
      {weekly.list.map(item => (
        <WeatherDayCol key={item.dt} low={Math.round(item.temp.min)} high={Math.round(item.temp.max)}
                       day={new Date(item.dt * 1000).toLocaleDateString('en-us', { weekday: 'short' })}
                       icon={iconsAndBackground[item.weather[0].icon].iconPlain}/>
      ))}
    </Card>
  )
}
