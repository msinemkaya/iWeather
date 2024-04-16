import { WelcomePage } from './components/pages/WelcomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WeatherInfoPage } from './components/pages/WeatherInfoPage.jsx'
import { ContextProviderLayout } from './components/pages/ContextProviderLayout.jsx'
import { fetchWeatherData } from './utils/fetchWeatherData.js'

const App = () => {

  const router = createBrowserRouter([
    {
      element: <ContextProviderLayout/>,
      children: [
        {
          path: '/',
          element: <WelcomePage/>,
        },
        {
          path: '/weather/:lat/:lon',
          element: <WeatherInfoPage/>,
          loader: async ({ params }) => {
            return await fetchWeatherData(params.lon, params.lat)
          },
        },
      ],
    } ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App
