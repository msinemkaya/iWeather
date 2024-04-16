import { LocationContextProvider } from '../../hooks/LocationContext.jsx'
import { Outlet } from 'react-router-dom'

export const ContextProviderLayout = () => {
  return (
    <LocationContextProvider>
      <Outlet/>
    </LocationContextProvider>
  )
}
