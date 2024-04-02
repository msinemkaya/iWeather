import { useContext } from 'react'
import { WeatherContext } from './WeatherContext.jsx'

export const useWeather = () => {
  return useContext(WeatherContext)
}
