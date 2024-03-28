import thermo from '../../assets/phosphor-icons/thermometer-simple-light.svg'

export const WeatherDetailRow = () => {
  return (
    <div className='py-4 flex justify-between items-center [&:not(:last-child)]:border-b border-gray-700'>
      <div className='flex items-center justify-center gap-3'>
        <img src={thermo} alt='thermometer icon' className='w-6 aspect-square'/>
        <h4 className='text-gray-200 heading xs capitalize'>
          Thermal sensation
        </h4>
      </div>
      <h4 className='heading sm'>26ºc</h4>
    </div>
  )
}
