import { Card } from '../base/Card.jsx'
import { WeatherDayCol } from '../common/WeatherDayCol.jsx'
import { iconsAndBackground } from '../../utils/icons-and-background.js'
import { useLoaderData } from 'react-router-dom'

export const WeatherWeekly = () => {
  const { responseWeeklyData } = useLoaderData()

  return (
    <Card className='flex snap-x scroll-smooth scrollbar-hidden overflow-y-auto flex-1 p-4'
          data-testid='weather-weekly'>
      {responseWeeklyData.list.map(item => (
        <WeatherDayCol key={item.dt} low={Math.round(item.temp.min)} high={Math.round(item.temp.max)}
                       day={item.dt}
                       icon={iconsAndBackground[item.weather[0].icon].iconPlain}/>
      ))}
    </Card>
  )
}
