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
import InquiryForm from './pages/inquiryForm';
import InquiryDisplay from './pages/inquiryDisplay'
import AcceptPro from './pages/AcceptPro'
import UserProfile from './pages/userProfile'
import ListProfess from './pages/ListProfess'

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
          <Route path='/profile' element={<UserProfile/>}/>
          <Route path='/inquiry' element={<InquiryForm/>}/>
          <Route path="/inquiryDisplay" element ={<InquiryDisplay/>}/>
          <Route path="/verify" element={<AcceptPro/>}/>
          <Route path="/list" element={<ListProfess/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
