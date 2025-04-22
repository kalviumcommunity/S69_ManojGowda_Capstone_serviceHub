import { React, useState } from "react";
import bgImg from '../assets/bg.jpeg';
import axios from 'axios';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("client")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}

    if (!name.trim()) newErrors.name = "Name is required"
    if (!email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format"

    if (!password) newErrors.password = "Password is required"
    if (password && password.length < 6) newErrors.password = "Password must be at least 6 characters"
    if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match"

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const res = await axios.post(
        "http://localhost:3010/api/auth/signup", {
          name,
          email,
          role,
          password
        }
       )
       console.log(res)
       if(res.status === 201){
        toast.success(res.data.message);
        navigate("/dashboard")
       }else{
         toast.error(response.data.message);
        }
    }catch(err){
      toast.error(err.res?.data?.message || 'Something went wrong. Try again!');
      console.log(err.message || err)
    }
  }

  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center brightness-75 contrast-95"
        style={{ backgroundImage: `url(${bgImg})` }}>
      </div>
      <div className="absolute top-4 left-4">
        <Link to="/"><button className="text-white text-3xl"><FaHome /></button></Link>
      </div>

      <div className="relative bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-[Inknut-Antiqua] text-center text-black mb-6">Signup</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <select value={role} onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-black">
            <option value="client">Client</option>
            <option value="professional">Professional</option>
          </select>

          <div>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password"
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
            {errors.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <p className="text-center text-black">
            Already have an account? <a href="/login" className="text-blue-600">Login</a>
          </p>

          <button type="submit"
            className="w-full bg-[#0574B9] mb-0 text-white p-3 rounded-md font-semibold">
            Submit
          </button>

          <div className="flex items-center my-4">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <p className="px-3 text-black">or</p>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>

          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                try {
                  const decoded = jwtDecode(credentialResponse.credential);
                  const res = await axios.post("http://localhost:3010/api/auth/google", {
                    token: credentialResponse.credential
                  }, { withCredentials: true });
                  navigate("/dashboard");
                } catch (error) {
                  alert("Login failed");
                }
              }}
              onError={() => console.log('Login Failed')}
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

export default Signup;