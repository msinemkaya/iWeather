export const WeatherInfoCardInfos = ({ current, low, high, text }) => {
  return (
    <>
      <h2 className='heading xl'>{Math.round(current)}ºc</h2>
      <h3 className='heading sm'>{Math.round(low)}ºc / {Math.round(high)}ºc</h3>
      <span className='text-sm capitalize'>{text}</span>
    </>
  )
}
