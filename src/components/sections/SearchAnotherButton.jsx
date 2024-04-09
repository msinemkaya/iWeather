import { Card } from '../base/Card.jsx'
import { useNavigate } from 'react-router-dom'

export const SearchAnotherButton = () => {
  const navigate = useNavigate()

  return (
    <Card>
      <button onClick={() => navigate('/')}
              className='text-gray-200 flex items-center capitalize justify-evenly heading sm w-full p-4'>
        <span>Search for another place</span>
        <span>
            <img src='/src/assets/logo.svg' alt=''/>
          </span>
      </button>
    </Card>
  )
}
