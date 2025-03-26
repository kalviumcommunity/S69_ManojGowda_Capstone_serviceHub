import './App.css'
import LandingPage from './pages/landingPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'
import RegisterPage from './pages/registerPage'
import ProProfile from './pages/proProfile'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path="/pro" element={<ProProfile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
