import { fetchWeatherData } from '../../utils/fetchWeatherData.js'
import { weatherApi } from '../../utils/weatherRequestInstance.js'
import { mockFetchWeatherData } from '../../__mocks__/fetchWeatherDataData.js'

jest.mock('../../utils/weatherRequestInstance.js', () => ({
  weatherApi: {
    get: jest.fn(),
  },
}))

describe('fetchWeatherData function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch weather data successfully', async () => {
    const lat = 40.71
    const lon = -74.00

    const infoData = mockFetchWeatherData.responseInfoData
    const weeklyData = mockFetchWeatherData.responseWeeklyData

    weatherApi.get.mockImplementationOnce(() => Promise.resolve({ data: infoData }))
    weatherApi.get.mockImplementationOnce(() => Promise.resolve({ data: weeklyData }))

    const result = await fetchWeatherData(lat, lon)

    expect(weatherApi.get).toHaveBeenCalledTimes(2)
    expect(weatherApi.get).toHaveBeenCalledWith('/', { params: { lat, lon } })
    expect(weatherApi.get).toHaveBeenCalledWith('/daily', { params: { lat, lon } })
    expect(result).toEqual({ responseInfoData: infoData, responseWeeklyData: weeklyData })
  })

  it('should handle errors', async () => {
    const lat = 40.71
    const lon = -74.00

    const errorMessage = 'Failed to fetch weather data'

    weatherApi.get.mockRejectedValueOnce(new Error(errorMessage))

    try {
      await fetchWeatherData(lat, lon)
    } catch (error) {
      expect(error.message).toEqual(errorMessage)
    }

    expect(weatherApi.get).toHaveBeenCalledTimes(2)
    expect(weatherApi.get).toHaveBeenCalledWith('/', { params: { lat, lon } })
    expect(weatherApi.get).toHaveBeenCalledWith('/daily', { params: { lat, lon } })
  })
})
