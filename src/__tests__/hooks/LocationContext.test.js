import { act, render, renderHook } from '@testing-library/react'
import { LocationContext, LocationContextProvider } from '../../hooks/LocationContext.jsx'
import { MemoryRouter } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import * as router from 'react-router'
import { useLocation } from '../../hooks/use-location.js'
import { mockUseWeather } from '../../__mocks__/use-weather.js'
import { WeatherContextProvider } from '../../hooks/WeatherContext.jsx'

jest.mock('../../hooks/use-weather.js', () => ({
  useWeather: jest.fn(() => mockUseWeather()),
}))

describe('location context', () => {
  it('should navigate to weather page when pressed', () => {
    const navigate = jest.fn()
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)

    const long = '40.71'
    const lat = '-74.00'
    const expectedUrl = `/weather/${long}/${lat}`

    const TestComponent = () => {
      const { navigateToWeatherPage } = useContext(LocationContext)
      useEffect(() => {
        navigateToWeatherPage(long, lat)
      }, []) // Call navigateToWeatherPage when component mounts
      return null
    }

    render(
      <MemoryRouter>
        <LocationContextProvider>
          <TestComponent/>
        </LocationContextProvider>
      </MemoryRouter>,
    )

    expect(navigate).toHaveBeenCalledWith(expectedUrl)
  })

  it('should call handlePlaceChanged', async () => {
    const wrapper = ({ children }) => (
      <WeatherContextProvider>
        <LocationContextProvider>
          {children}
        </LocationContextProvider>
      </WeatherContextProvider>
    )

    const { result } = renderHook(() => useLocation(), { wrapper })

    const autocompleteMock = {
      getPlaces: jest.fn().mockReturnValue([
        {
          formatted_address: 'New York City, NY, USA',
          geometry: {
            location: {
              lng: () => -74.006,
              lat: () => 40.7128,
            },
          },
        },
      ]),
    }

    act(() => {
      result.current.setAutocomplete(autocompleteMock)
    })

    const { handlePlaceChanged } = result.current

    await act(async () => {
      await handlePlaceChanged()
    })

    expect(result.current.autocomplete.getPlaces).toHaveBeenCalled()
  })
})
