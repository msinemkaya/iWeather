import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockFetchWeatherData } from '../../__mocks__/fetchWeatherDataData.js'
import { MemoryRouter } from 'react-router-dom'
import { WeatherInfoPage } from '../../components/pages/WeatherInfoPage.jsx'
import { useLocation } from '../../hooks/use-location.js'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => mockFetchWeatherData),
}))

jest.mock('../../hooks/use-location.js')

describe('weather info page', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ setLoading: jest.fn() })
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

  it('sets loading to false after mounting', () => {
    // Assert that the setLoading function was called with false after mounting
    expect(useLocation().setLoading).toHaveBeenCalledWith(false)
  })
})
