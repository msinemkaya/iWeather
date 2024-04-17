import { Card } from '../base/Card.jsx'
import { WeatherBackgroundContainer } from '../common/WeatherBackgroundContainer.jsx'
import { WeatherInfoCardIcon } from '../common/WeatherInfoCardIcon.jsx'
import { WeatherInfoCardInfos } from '../common/WeatherInfoCardInfos.jsx'
import { WeatherInfoCardLocationAndTime } from '../common/WeatherInfoCardLocationAndTime.jsx'
import { iconsAndBackground } from '../../utils/icons-and-background.js'
import { useLoaderData } from 'react-router-dom'

export const WeatherInfoCard = () => {
  const { responseInfoData } = useLoaderData()

  const infoData = responseInfoData
  const todaysForecast = infoData.list[0]
  const bg = iconsAndBackground[todaysForecast.weather[0].icon].bg
  const icon = iconsAndBackground[todaysForecast.weather[0].icon].icon

  return (
    <Card className='p-3' data-testid='weather-info-card'>
      <WeatherBackgroundContainer bg={bg}>
        <div className='m-5'>
          <WeatherInfoCardLocationAndTime location={`${infoData.city.name}, ${infoData.city.country}`}/>
        </div>
        <div className='mt-auto flex justify-between items-end'>
          <div className='m-4'>
            <WeatherInfoCardInfos current={todaysForecast.main.temp}
                                  low={todaysForecast.main.temp_min}
                                  high={todaysForecast.main.temp_max}
                                  text={todaysForecast.weather[0].main}/>
          </div>
          <div className='-mr-8 -mb-7'>
            <WeatherInfoCardIcon iconUrl={icon}/>
          </div>
        </div>
      </WeatherBackgroundContainer>
    </Card>
  )
}
