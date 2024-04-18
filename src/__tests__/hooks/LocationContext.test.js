import { act, render, renderHook } from '@testing-library/react'
import { LocationContext, LocationContextProvider } from '../../hooks/LocationContext'
import { MemoryRouter } from 'react-router-dom'
import { useContext } from 'react'
import * as router from 'react-router'

describe('Location Context', () => {
  it('should navigate to weather page when pressed', () => {
    const navigate = jest.fn()
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)

    const long = '40.71'
    const lat = '-74.00'
    const expectedUrl = { 'pathname': '/weather', 'search': `?lat=${lat}&long=${long}` }

    const TestComponent = () => {
      const { navigateToWeatherPage } = useContext(LocationContext)
      navigateToWeatherPage(long, lat)
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

  it('should call handlePlaceChanged', () => {
    const wrapper = ({ children }) => (
      <LocationContextProvider>
        {children}
      </LocationContextProvider>
    )

    const { result } = renderHook(() => useContext(LocationContext), { wrapper })

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

    handlePlaceChanged()

    expect(autocompleteMock.getPlaces).toHaveBeenCalled()
  })
})
