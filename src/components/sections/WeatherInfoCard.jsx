import { Card } from '../base/Card.jsx'
import { WeatherBackgroundContainer } from '../common/WeatherBackgroundContainer.jsx'
import { WeatherInfoCardIcon } from '../common/WeatherInfoCardIcon.jsx'
import { WeatherInfoCardInfos } from '../common/WeatherInfoCardInfos.jsx'
import { WeatherInfoCardLocationAndTime } from '../common/WeatherInfoCardLocationAndTime.jsx'

export const WeatherInfoCard = () => {
  const bg = '/src/assets/weather-bg/fewClouds-night.svg'
  const icon = '/src/assets/weather-icons/fewClouds-night.svg'

  return (
    <Card className='p-3'>
      <WeatherBackgroundContainer bg={bg}>
        <div className='m-5'>
          <WeatherInfoCardLocationAndTime location='Istanbul, TR' time='Monday, May 15, 2023'/>
        </div>
        <div className='mt-auto flex justify-between items-end'>
          <div className='m-4'>
            <WeatherInfoCardInfos current={28} low={26} high={32} text='few clouds'/>
          </div>
          <div className='-mr-8 -mb-8'>
            <WeatherInfoCardIcon iconUrl={icon}/>
          </div>
        </div>
      </WeatherBackgroundContainer>
    </Card>
  )
}
