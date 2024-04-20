import { useRouteError } from 'react-router-dom'

export const ErrorMessage = ({ error }) => {
  const errorMessage = useRouteError()
  return <div className='text-center px-2 py-4 heading sm' data-testid='error'>{error || errorMessage.message}</div>
}
