import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { WeatherInfoCard } from '../../components/sections/WeatherInfoCard.jsx'
import { mockFetchWeatherData } from '../../__mocks__/fetchWeatherDataData.js'

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn(() => mockFetchWeatherData),
}))

describe('weather info card', () => {
  beforeEach(() => {
    render(<WeatherInfoCard/>)
  })

  it('should render weather info card with correct information', () => {
    const { list, city } = mockFetchWeatherData.responseInfoData

    expect(screen.getByText(`${city.name}, ${city.country}`)).toBeInTheDocument()
    expect(screen.getByText(`${Math.round(list[0].main.temp)}ºc`)).toBeInTheDocument()
    expect(screen.getByText(`${Math.round(list[0].main.temp_min)}ºc / ${Math.round(list[0].main.temp_max)}ºc`)).toBeInTheDocument()
    expect(screen.getByText(list[0].weather[0].main)).toBeInTheDocument()
    expect(screen.getByAltText('weather icon')).toBeInTheDocument()
  })
})
