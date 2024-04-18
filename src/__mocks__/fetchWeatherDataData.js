export const mockFetchWeatherData = {
  responseInfoData: {
    list: [
      {
        main: { feels_like: 25, humidity: 60, temp: 25, temp_min: 20, temp_max: 30 },
        pop: 0.5,
        wind: { speed: 10 },
        weather: [ { icon: '01d', main: 'clear' } ],
      },
    ],
    city: {
      name: 'opole',
      country: 'poland',
    },
  },
  responseWeeklyData: {
    list: [
      {
        dt: 1661870592,
        temp: {
          min: 10,
          max: 20.40,
        },
        weather: [ { icon: '01d' } ],
      },
    ],
  },
}
