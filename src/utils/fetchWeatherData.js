import { weatherApi } from './weatherRequestInstance.js'
import axios from 'axios'

export const fetchWeatherData = async (lat, lon) => {
  try {
    const requestInfo = weatherApi.get('/', { params: { lat, lon } })
    const requestWeekly = weatherApi.get('/daily', { params: { lat, lon } })

    const [ responseInfo, responseWeekly ] = await axios.all([ requestInfo, requestWeekly ])

    const responseInfoData = responseInfo.data
    const responseWeeklyData = responseWeekly.data

    return { responseInfoData, responseWeeklyData }
  } catch (error) {
    return error
  }
}
