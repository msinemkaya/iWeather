import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { WeatherInfoCard } from '../../components/sections/WeatherInfoCard.jsx'
import { mockUseWeather } from '../../__mocks__/use-weather.js'

jest.mock('../../hooks/use-weather.js', () => ({
  useWeather: jest.fn(() => mockUseWeather())
}))

describe('weather info card', () => {
  beforeEach(() => {
    render(<WeatherInfoCard/>)
  })

  it('should render weather info card with correct information', () => {
    expect(screen.getByText('opole, poland')).toBeInTheDocument()

    expect(screen.getByText('25ºc')).toBeInTheDocument()
    expect(screen.getByText('20ºc / 30ºc')).toBeInTheDocument()
    expect(screen.getByText('clear')).toBeInTheDocument()

    expect(screen.getByAltText('weather icon')).toBeInTheDocument()
  })
})
