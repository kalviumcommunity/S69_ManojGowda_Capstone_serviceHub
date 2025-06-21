import React, { useState } from "react";
import bgImg from '../assets/bg.jpeg';
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaHome } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        { email, password },  
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
  
     
      if(response.status === 200){
        toast.success(response.data.message);
        navigate("/dashboard")
      }else{
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong. Try again!');
      console.error("Error:", err.response?.data || err.message);
    }
  };
  

  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75 contrast-95"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="absolute top-4 left-4">
        <Link to="/"><button className="text-white text-3xl">
          <FaHome />
        </button></Link>
      </div>

      <div className="relative bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-[Inknut-Antiqua] text-center text-black mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <p className="text-center text-black">
            Don't have an account? <a href="/signup" className="text-blue-600">Signup</a>
          </p>
            <p className="text-center text-gray-700">
              <a href="/forgot-password" className="hover:underline">Forgot password?</a>
            </p>

          <button type="submit" className="w-full mb-0 bg-[#0574B9] text-white p-3 rounded-md font-semibold">
            Login
          </button>

          <div className="flex items-center my-4">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <p className="px-3 text-black">or</p>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>

          {/* Google Login Button (No extra wrapper) */}
          <div className="flex justify-center">
            <GoogleLogin  
              onSuccess={async (credentialResponse) => {
                try {
                  await axios.post(`${API_URL}/auth/google`, {
                    token: credentialResponse.credential
                  }, { withCredentials: true });

                  navigate("/dashboard");

                } catch (error) {
                  console.error("Error sending token to backend:", error.message);
                  alert("Login failed");
                }
              }}
              size="large" 
              ux_mode="popup"
              theme="outline"
            />
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;
