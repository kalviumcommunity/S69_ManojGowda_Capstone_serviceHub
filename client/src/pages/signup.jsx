import {React,useState} from "react";
import bgImg from '../assets/bg.jpeg';
import axios from 'axios';
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import {Link} from 'react-router-dom'
function Signup() {

  const navigate = useNavigate()
  const [name,setName] = useState(null)
  const [email,setEmail] = useState(null)
  const [role,setRole] = useState("client")
  const [password,setPassword] = useState(null) 
  
  const handleSubmit = async(e) => {
    e.preventDefault()

    // console.log(name,email,role,password)
    try{
       const res = await axios.post(
        "http://localhost:3010/api/auth/signup",{
          name,
          email,
          role,
          password
        }
       )
       console.log(res)
       if(res.status === 201){
        navigate("/dashboard")
       }
    }catch(err){
      console.log(err.message || err)
    }


  }

  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75 contrast-95"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
       <div className="absolute top-4 left-4">
              <Link to="/"><button className="text-white text-3xl">
                <FaHome />
              </button></Link> 
            </div>

      {/* Form Container */}
      <div className="relative bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-[Inknut-Antiqua] text-center text-black mb-6">Signup</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-3 rounded-md border border-gray-300 bg-white text-black">
            <option value="client">Client</option>
            <option value="professional">Professional</option>
          </select>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <input type="password" placeholder="Confirm Password" className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <p className="text-center text-black">
            Already have an account? <a href="/login" className="text-blue-600">Login</a>
          </p>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-[#0574B9] mb-0 text-white p-3 rounded-md font-semibold">
            Submit
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <p className="px-3 text-black">or</p>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>

          {/* Google  */}
          <div className="flex justify-center">
            <GoogleLogin  
              onSuccess={async (credentialResponse) => {
                try {
                  console.log("Google Credential:", credentialResponse);
                  const decoded = jwtDecode(credentialResponse.credential);
                  console.log("Decoded User Info:", decoded);

                  // Send token to backend
                  const res = await axios.post("http://localhost:3010/api/auth/google", {
                    token: credentialResponse.credential
                  }, { withCredentials: true });

                  console.log("Server Response:", res.data);
                  navigate("/dashboard");

                } catch (error) {
                  console.error("Error sending token to backend:", error.message);
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
