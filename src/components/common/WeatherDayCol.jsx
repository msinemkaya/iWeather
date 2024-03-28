import stormDay from '../../assets/weather-icons-non-shiny/storm-day.svg'
export const WeatherDayCol = () => {
  return (
    <div className='text-center'>
      <h5 className='heading xs capitalize text-gray-200'>Mon</h5>
      <img src={stormDay} alt='' className='w-14 aspect-square'/>
    </div>
  )
}
