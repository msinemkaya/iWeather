import stormDay from '../../assets/weather-icons-non-shiny/storm-day.svg'

export const WeatherDayCol = ({ low, day, high }) => {
  return (
    <div className='text-center grid place-items-center snap-center min-w-16 py-4 grow space-y-1 heading xs'>
      <p className='capitalize text-gray-200'>{day}</p>
      <img src={stormDay} alt='' className='w-14 aspect-square'/>
      <div>
        <p>{high}ºc</p>
        <p className='text-gray-400'>{low}ºc</p>
      </div>
    </div>
  )
}
