import { LoadScript } from '@react-google-maps/api'
import { useMemo } from 'react'

export const LocationInputContainer = ({children}) => {
  const libs = useMemo(() => [ 'places' ], [])

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_LOCATION_API_KEY} libraries={libs}>
      {children}
    </LoadScript>
  )
}
