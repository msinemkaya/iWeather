import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockFetchWeatherData } from '../../__mocks__/fetchWeatherDataData.js'
import { WeatherWeekly } from '../../components/sections/WeatherWeekly.jsx'

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn(() => mockFetchWeatherData),
}))

describe('weather weekly', () => {
  beforeEach(() => {
    render(<WeatherWeekly/>)
  })

  it.each(mockFetchWeatherData.responseWeeklyData.list)('should render weekly weather data', ({ dt, temp, weather }) => {
    const dayOfWeek = new Date(dt * 1000).toLocaleDateString('en-us', { weekday: 'short' })

    expect(screen.getByText(`${Math.round(temp.min).toString()}ºc`)).toBeInTheDocument()
    expect(screen.getByText(`${Math.round(temp.max).toString()}ºc`)).toBeInTheDocument()
    expect(screen.getByText(dayOfWeek)).toBeInTheDocument()

    const weatherDayCols = screen.getAllByTestId('weather-day-col')
    expect(weatherDayCols).toHaveLength(mockFetchWeatherData.responseWeeklyData.list.length)
  })
})
