const iconUrlRoot = '/src/assets/phosphor-icons'

export const weatherDetails = (info) => {
  return [
    {
      icon: `${iconUrlRoot}/thermometer-simple-light.svg`,
      text: 'thermal sensation',
      value: `${Math.round(info.list[0].main.feels_like)}ºc`,
    },
    {
      icon: `${iconUrlRoot}/cloud-rain-light.svg`,
      text: 'Probability of rain',
      value: `${((info.list[0].pop) * 100).toFixed(0)}%`,
    },
    {
      icon: `${iconUrlRoot}/wind-light.svg`,
      text: 'Wind speed',
      value: `${Math.round(info.list[0].wind.speed)} km/h`,
    },
    {
      icon: `${iconUrlRoot}/drop-light.svg`,
      text: 'Air humidity',
      value: `${info.list[0].main.humidity}%`,
    },
    {
      icon: `${iconUrlRoot}/sun-dim-light.svg`,
      text: 'UV Index',
      value: info.list[0].main.feels_like,
    },
  ]
}
