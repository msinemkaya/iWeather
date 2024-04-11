import '@testing-library/jest-dom'
import { mockWeatherDayColData } from '../../__mocks__/weatherDayColData.js'
import { WeatherDayCol } from '../../components/common/WeatherDayCol.jsx'
import { render, screen } from '@testing-library/react'

describe('weather day column', () => {
  it.each(mockWeatherDayColData)('should render with correct props', ({ low, high, dt, icon }) => {
    render(
      <WeatherDayCol low={low} day={dt} high={high} icon={icon}/>,
    )

    const dayString = new Date(dt * 1000).toLocaleDateString('en-us', { weekday: 'short' })
    expect(screen.getByText(dayString)).toBeInTheDocument()
    expect(screen.getByAltText('')).toBeInTheDocument() // You can add alt text for the image
    expect(screen.getByText(`${high}ºc`)).toBeInTheDocument()
    expect(screen.getByText(`${low}ºc`)).toBeInTheDocument()
  })
})
