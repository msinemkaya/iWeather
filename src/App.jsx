import { WelcomePage } from './components/pages/WelcomePage.jsx'
import { Route, Routes } from 'react-router-dom'
import { WeatherInfoPage } from './components/pages/WeatherInfoPage.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/weather/:lon/:lat' element={<WeatherInfoPage/>}/>
    </Routes>
  )
}
export default App
