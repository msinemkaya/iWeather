export const mockUseWeather = jest.fn(() => ({
  weatherDetails: jest.fn(() => [
    { text: 'Temperature', icon: 'temperature icon', value: '25°C' },
    { text: 'Humidity', icon: 'humidity icon', value: '60%' },
    { text: 'Wind Speed', icon: 'wind speed icon', value: '10 km/h' },
  ]),
}))
