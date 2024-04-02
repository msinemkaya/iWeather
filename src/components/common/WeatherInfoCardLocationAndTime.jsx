export const WeatherInfoCardLocationAndTime = ({ location }) => {
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
  const date = new Date().toLocaleDateString('en-us', options)
  return (
    <>
      <h2 className='heading sm'>{location}</h2>
      <p className='text-xs'>{date}</p>
    </>
  )
}
