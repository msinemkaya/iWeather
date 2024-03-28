import { Card } from '../base/Card.jsx'
import { WeatherDetails } from '../sections/WeatherDetails.jsx'
import { WeatherWeekly } from '../sections/WeatherWeekly.jsx'

export const WeatherInfoPage = () => {
  // const bg = 'few-night'
  const bg = "./src/assets/weather-bg/fewClouds-night.svg"
  const icon = './src/assets/weather-icons/fewClouds-night.svg'
  return (
    <div className='p-2 space-y-2'>
      <Card className='p-3'>
        <div className={`rounded-lg h-80 overflow-hidden bg-${bg} bg-cover flex flex-col`} style={{backgroundImage :` url(${bg})`}}>
          <div className='m-5'>
            <h2 className='heading sm'>Istanbul, TR</h2>
            <p className='text-xs'>Monday, May 15, 2023</p>
          </div>
          <div className='mt-auto flex justify-between items-end'>
            <div className='m-4'>
              <h2 className='heading xl'>28ºc</h2>
              <h3 className='heading sm'>26ºc / 32ºc</h3>
              <span className='text-sm'>Few clouds</span>
            </div>
            <div className='-mr-8 -mb-8'>
              <img src={icon} alt='' className='w-56 h-56'/>
            </div>
          </div>
        </div>
      </Card>
      <WeatherDetails/>
      <WeatherWeekly/>
    </div>
  )
}
