import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { WeatherDetails } from '../../components/sections/WeatherDetails.jsx'
import { mockUseWeather } from '../../__mocks__/use-weather.js'

jest.mock('../../hooks/use-weather.js', () => ({
  useWeather: jest.fn(() => mockUseWeather())
}))
describe('weather details', () => {
  beforeEach(() => {
    render(<WeatherDetails/>)
  })

  it('should render weather details', () => {
    expect(screen.getByText('Temperature')).toBeInTheDocument()
    expect(screen.getByText('Humidity')).toBeInTheDocument()
    expect(screen.getByText('Wind Speed')).toBeInTheDocument()

    expect(screen.getByAltText('Temperature icon')).toBeInTheDocument()
    expect(screen.getByAltText('Humidity icon')).toBeInTheDocument()
    expect(screen.getByAltText('Wind Speed icon')).toBeInTheDocument()

    expect(screen.getByText('25°C')).toBeInTheDocument()
    expect(screen.getByText('60%')).toBeInTheDocument()
    expect(screen.getByText('10 km/h')).toBeInTheDocument()

    expect(screen.getAllByTestId('weather-detail-row')).toHaveLength(3)
  })
})
