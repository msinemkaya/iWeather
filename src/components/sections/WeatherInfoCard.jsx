import { Card } from '../base/Card.jsx'
import { WeatherBackgroundContainer } from '../common/WeatherBackgroundContainer.jsx'
import { WeatherInfoCardIcon } from '../common/WeatherInfoCardIcon.jsx'
import { WeatherInfoCardInfos } from '../common/WeatherInfoCardInfos.jsx'
import { WeatherInfoCardLocationAndTime } from '../common/WeatherInfoCardLocationAndTime.jsx'
import { useWeather } from '../../hooks/use-weather.js'


export const WeatherInfoCard = () => {
  const bg = '/src/assets/weather-bg/fewClouds-night.svg'
  const icon = '/src/assets/weather-icons/fewClouds-night.svg'
  const { info } = useWeather()
  const todaysForecast = info.list[0]

  return (
    <Card className='p-3'>
      <WeatherBackgroundContainer bg={bg}>
        <div className='m-5'>
          <WeatherInfoCardLocationAndTime location={`${info.city.name}, ${info.city.country}`}/>
        </div>
        <div className='mt-auto flex justify-between items-end'>
          <div className='m-4'>
            <WeatherInfoCardInfos current={Math.round(todaysForecast.main.temp)} low={Math.round(todaysForecast.main.temp_min)} high={Math.round(todaysForecast.main.temp_max)} text={todaysForecast.weather[0].main}/>
          </div>
          <div className='-mr-8 -mb-8'>
            <WeatherInfoCardIcon iconUrl={icon}/>
          </div>
        </div>
      </WeatherBackgroundContainer>
    </Card>
  )
}
