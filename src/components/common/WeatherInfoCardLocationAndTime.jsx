export const WeatherInfoCardLocationAndTime = ({ location, time }) => {
  return (
    <>
      <h2 className='heading sm'>{location}</h2>
      <p className='text-xs'>{time}</p>
    </>
  )
}
