import { WelcomePage } from './components/pages/WelcomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WeatherInfoPage } from './components/pages/WeatherInfoPage.jsx'
import { ContextProviderLayout } from './components/pages/ContextProviderLayout.jsx'
import { fetchWeatherData } from './utils/fetchWeatherData.js'
import { ErrorMessage } from './components/common/ErrorMessage.jsx'

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
          path: '/weather',
          element: <WeatherInfoPage/>,
          loader: async ({ request }) => {
            const url = new URL(request.url)
            const long = url.searchParams.get('long')
            const lat = url.searchParams.get('lat')
            return await fetchWeatherData(lat, long)
          },
          errorElement: (
            <div className='flex items-center justify-center h-svh'>
              <ErrorMessage/>
            </div>),
        },
      ],
    } ])

  return (
    <RouterProvider router={router}/>
  )
}
export default App
