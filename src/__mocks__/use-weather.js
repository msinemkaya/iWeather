export const mockUseWeather = jest.fn(() => ({
  weatherDetails: jest.fn(() => [
    { text: 'Temperature', icon: 'temperature icon', value: '25°C' },
    { text: 'Humidity', icon: 'humidity icon', value: '60%' },
    { text: 'Wind Speed', icon: 'wind speed icon', value: '10 km/h' },
  ]),
  info: {
    list: [
      {
        main: { feels_like: 25, humidity: 60, temp: 25, temp_min:20, temp_max:30 },
        pop: 0.5,
        wind: { speed: 10 },
        weather: [ { icon: '01d', main: 'clear' }]
      }
    ],
    city: {
      name: 'opole',
      country: 'poland'
    }
  },
}))
