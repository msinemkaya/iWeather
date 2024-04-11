import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { WeatherInfoPage } from '../../components/pages/WeatherInfoPage.jsx'
import { mockUseWeather } from '../../__mocks__/use-weather.js'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../hooks/use-weather.js', () => ({
  useWeather: jest.fn(() => mockUseWeather()),
}))

describe('weather info page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <WeatherInfoPage/>
      </MemoryRouter>,
    )
  })

  it('should render info card, weekly weather data, search another button, weather details when there is not an error', () => {
    expect(screen.getByTestId('weather-info-card')).toBeInTheDocument()
    expect(screen.getByTestId('weather-details')).toBeInTheDocument()
    expect(screen.getByTestId('weather-weekly')).toBeInTheDocument()
    expect(screen.getByTestId('search-another-button')).toBeInTheDocument()
  })
})
