import axios from 'axios'

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
  params:{
    cnt:7,
    appid: import.meta.env.VITE_WEATHER_API_KEY,
    units: 'metric'
  }
})
