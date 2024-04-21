import { Card } from '../base/Card.jsx'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
export const SearchAnotherButton = () => {
  const navigate = useNavigate()

  return (
    <Card data-testid='search-another-button' className=>
      <button onClick={() => navigate('/')}
              className='text-gray-200 flex items-center capitalize justify-evenly heading sm w-full p-4'>
        <span>Search for another place</span>
        <span>
            <img src={logo} alt=''/>
        </span>
      </button>
    </Card>
  )
}
