import { useLocation } from '../../hooks/use-location.js'

export const ErrorMessage = () => {
  const { error } = useLocation()

  return error ? <div className='text-center px-2 py-4 heading sm '>{error}</div> : null
}
