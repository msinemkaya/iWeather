export const WeatherDayCol = ({ low, day, high, icon }) => {
  const dayString = new Date(day * 1000).toLocaleDateString('en-us', { weekday: 'short' })

  return (
    <div className='text-center grid place-items-center snap-center min-w-16 py-4 grow space-y-1 heading xs'
         data-testid='weather-day-col'>
      <p className='capitalize text-gray-200'>{dayString}</p>
      <img src={icon} alt='' className='w-14 aspect-square'/>
      <div>
        <p>{high}ºc</p>
        <p className='text-gray-400'>{low}ºc</p>
      </div>
    </div>
  )
}
