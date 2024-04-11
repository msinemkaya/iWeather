import '@testing-library/jest-dom'
import { mockWeatherInfoCardInfosData } from '../../__mocks__/weatherInfoCardInfosData.js'
import { render, screen } from '@testing-library/react'
import { WeatherInfoCardInfos } from '../../components/common/WeatherInfoCardInfos.jsx'

describe('weather info card infos', () => {

  it.each(mockWeatherInfoCardInfosData)('should render with correct props', ({ current, low, high, text }) => {
    render(<WeatherInfoCardInfos current={current} text={text} high={high} low={low}/>)

    expect(screen.getByText(`${Math.round(current)}ºc`)).toBeInTheDocument()
    expect(screen.getByText(`${Math.round(low)}ºc / ${Math.round(high)}ºc`)).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
