import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockUseWeather } from '../../__mocks__/use-weather.js'
import { WeatherWeekly } from '../../components/sections/WeatherWeekly.jsx'

jest.mock('../../hooks/use-weather.js', () => ({
  useWeather: jest.fn(() => mockUseWeather()),
}))

describe('weather weekly', () => {
  beforeEach(() => {
    render(<WeatherWeekly/>)
  })

  it.each(mockUseWeather().weekly.list)('should render weekly weather data', ({ dt, temp, weather }) => {
    const dayOfWeek = new Date(dt * 1000).toLocaleDateString('en-us', { weekday: 'short' })

    expect(screen.getByText(`${Math.round(temp.min).toString()}ºc`)).toBeInTheDocument()
    expect(screen.getByText(`${Math.round(temp.max).toString()}ºc`)).toBeInTheDocument()
    expect(screen.getByText(dayOfWeek)).toBeInTheDocument()
  })
})
