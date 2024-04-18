export const mockWeatherDetails = jest.fn(() => [
  { icon: 'temperature icon', text: 'Temperature', value: '25°C' },
  { icon: 'humidity icon', text: 'Humidity', value: '60%' },
  { icon: 'wind speed icon', text: 'Wind Speed', value: '10 km/h' },
])
