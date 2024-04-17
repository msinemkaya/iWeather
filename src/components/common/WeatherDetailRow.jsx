export const WeatherDetailRow = ({ text, icon, value }) => {
  return (
    <div className='py-4 flex justify-between items-center [&:not(:last-child)]:border-b border-gray-700'
         data-testid='weather-detail-row'>
      <div className='flex items-center justify-center gap-3'>
        <img src={icon} alt={`${text} icon`} className='w-6 aspect-square'/>
        <h4 className='text-gray-200 heading xs first-letter:uppercase'>
          {text}
        </h4>
      </div>
      <h4 className='heading sm'>{value}</h4>
    </div>
  )
}
