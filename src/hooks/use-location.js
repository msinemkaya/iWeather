import { useContext } from 'react'
import { LocationContext } from './LocationContext.jsx'

export const useLocation = () => {
  return useContext(LocationContext)
}
