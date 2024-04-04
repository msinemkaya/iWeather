import axios from 'axios'
import { createContext, useState } from 'react'

export const WeatherContext = createContext({})

export const WeatherContextProvider = ({ children }) => {
  const [ info, setInfo ] = useState(null)
  const [ weekly, setWeekly ] = useState(null)
  const [error, setError] = useState(null)
  const iconUrlRoot = '/src/assets/phosphor-icons'
  const fetchWeatherData = async (lat, lon) => {
    try {
      const responseInfo = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=1&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
      const responseWeekly = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
      setInfo(responseInfo.data)
      setWeekly(responseWeekly.data)
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  const weatherDetails = () => {
    return [
      {
        icon: `${iconUrlRoot}/thermometer-simple-light.svg`,
        text: 'thermal sensation',
        value: `${Math.round(info.list[0].main.feels_like)}ºc`,
      },
      {
        icon: `${iconUrlRoot}/cloud-rain-light.svg`,
        text: 'Probability of rain',
        value: `${(info.list[0].pop) * 100}%`,
      },
      {
        icon: `${iconUrlRoot}/wind-light.svg`,
        text: 'Wind speed',
        value: `${Math.round(info.list[0].wind.speed)} km/h`,
      },
      {
        icon: `${iconUrlRoot}/drop-light.svg`,
        text: 'Air humidity',
        value: `${info.list[0].main.humidity}%`,
      },
      {
        icon: `${iconUrlRoot}/sun-dim-light.svg`,
        text: 'UV Index',
        value: info.list[0].main.feels_like,
      },
    ]
  }

  const exportedValues = {
    weekly,
    info,
    error,
    fetchWeatherData,
    weatherDetails,
  }
  return (
    <WeatherContext.Provider value={exportedValues}>
      {children}
    </WeatherContext.Provider>
  )
}
