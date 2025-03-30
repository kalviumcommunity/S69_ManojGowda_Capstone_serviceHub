import './App.css';
import LandingPage from './pages/landingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import RegisterPage from './pages/registerPage';
import ProProfile from './pages/proProfile';
import DisplayPro from './pages/displayPro';
import DashBoard from './pages/dashBoard';
import NotFound from './pages/notFound';


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/pro" element={<ProProfile />} />
          <Route path="/proProfile" element={<DisplayPro />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
