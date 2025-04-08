import React, { useState } from "react";
import bgImg from '../assets/bg.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ForgotAndResetPassword() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:3010/api/auth/resetOtp", { email }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });
      if (res.status === 200) {
        setOtpSent(true);
        setMessage("OTP sent to your email");
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to send OTP");
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3010/api/auth/reset-password", {
        email,
        otp,
        newPassword
      }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });

      if (res.status === 200) {
        setMessage("Password reset successfully!");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      console.error(err);
      setMessage("OTP verification failed or request error.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75 contrast-95"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <div className="absolute top-4 left-4">
        <Link to="/">
          <button className="text-white text-3xl">
            <FaHome />
          </button>
        </Link>
      </div>

      <div className="relative bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-[Inknut-Antiqua] text-center text-black mb-6">Reset Password</h2>
        
        <form className="space-y-4" onSubmit={otpSent ? handleReset : (e) => { e.preventDefault(); sendOtp(); }}>
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" 
            required 
            disabled={otpSent}
          />

          {otpSent && (
            <>
              <input 
                type="text" 
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)} 
                className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" 
                required
              />
              <input 
                type="password" 
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} 
                className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" 
                required
              />
            </>
          )}

          {message && (
            <p className="text-center text-sm text-black bg-white/70 rounded-md p-2">{message}</p>
          )}

          <button 
            type="submit" 
            className="w-full bg-[#0574B9] text-white p-3 rounded-md font-semibold"
          >
            {otpSent ? "Reset Password" : "Send OTP"}
          </button>

          <p className="text-center text-black">
            Back to <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotAndResetPassword;
