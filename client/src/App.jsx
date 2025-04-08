import './App.css';
import LandingPage from './pages/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import AdminRoute from "./routes/AdminRoute";
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
import ForgotPassword from './pages/forgotPass';
import FAQPage from './pages/FAQpage';
import AboutPage from './pages/about';

function App() {
  return (

<AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
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
          <Route path="/list" element={<ListProfess/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path='/FAQ' element={<FAQPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path="*" element={<NotFound />} />

          {/* Protected Admin Route */}
          <Route element={<AdminRoute />}>
            <Route path="/verify" element={<AcceptPro />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>

  );
}

export default App;