export const WeatherInfoCardInfos = ({ current, low, high, text }) => {
  return (
    <>
      <h2 className='heading xl'>{current}ºc</h2>
      <h3 className='heading sm'>{low}ºc / {high}ºc</h3>
      <span className='text-sm capitalize'>{text}</span>
    </>
  )
}
