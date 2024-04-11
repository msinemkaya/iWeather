import '@testing-library/jest-dom'
import { mockWeatherDetailRowData } from '../../__mocks__/weatherDetailRowData.js'
import { render, screen } from '@testing-library/react'
import { WeatherDetailRow } from '../../components/common/WeatherDetailRow.jsx'

describe('weather detail row', () => {

  it.each(mockWeatherDetailRowData)('should render with correct props', ({ text, icon, value }) => {
    render(<WeatherDetailRow text={text} icon={icon} value={value}/>)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByAltText(`${text} icon`)).toBeInTheDocument()
    expect(screen.getByText(value)).toBeInTheDocument()
  })
})
