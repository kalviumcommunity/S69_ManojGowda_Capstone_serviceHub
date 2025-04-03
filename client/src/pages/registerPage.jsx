import {React,useState} from "react";
import { FaHome } from "react-icons/fa";
import bgImg from '../assets/bg.jpeg';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Register() {
  
  const [data,setData] = useState({
    fullName :"",
    email:"",
    location:"", 
    phone:"", 
    picture:"", 
    bio:"", 
    profession:"", 
    experience:"", 
    availability:"", 
    servicesOffered:"",
    category:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Cookies before request:", document.cookie); // Check if cookie is present
  
    try {
      const res = await axios.post("http://localhost:3010/api/register", data, {
        withCredentials: true,
      });
      console.log("Response:", res.data);
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    }
  };
  



  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75 contrast-95"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Home Button */}
      <div className="absolute top-4 left-4">
        <Link to="/">
          <button className="text-white text-3xl">
            <FaHome />
          </button>
        </Link>
      </div>

      {/* Form Container */}
      <div className="relative bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg w-[80%] max-w-4xl">
        <h2 className="text-3xl font-[Inknut-Antiqua] text-center text-black mb-6">
          Register as Professional
        </h2>
        <form className="grid grid-cols-3 gap-4" onSubmit={handleSubmit}>
          {/* Personal Details */}
          <input type="text" onChange={(e) => setData((prev) => ({ ...prev, fullName: e.target.value }))} placeholder="name" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <input type="email" onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))} placeholder="Email" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <input type="text" onChange={(e) => setData((prev) => ({ ...prev, location: e.target.value }))} placeholder="Location" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          
          <input type="text" onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))} placeholder="Phone" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          
          {/* File Upload with Placeholder */}
          <div className="relative col-span-1 h-full flex items-center">
            <input 
              type="file" 
              id="fileUpload" 
              className="hidden" 
            />
            <label 
              htmlFor="fileUpload" 
              className="p-3 h-full flex items-center justify-center rounded-md border border-gray-300 bg-white text-black w-full cursor-pointer"
            >
              Upload Profile Picture
            </label>
          </div>

          <textarea placeholder="Bio" onChange={(e) => setData((prev) => ({ ...prev, bio: e.target.value }))} className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1 h-20"></textarea>

          {/* Professional Details */}
          <input type="text" onChange={(e) => setData((prev) => ({ ...prev, profession: e.target.value }))} placeholder="Profession" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <input type="text" onChange={(e) => setData((prev) => ({ ...prev, experience: e.target.value }))} placeholder="Experience" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <input type="text" onChange={(e) => setData((prev) => ({ ...prev, availability: e.target.value }))} placeholder="Availability" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          
          {/* Services Offered & Select Category */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            <textarea 
              onChange={(e) => setData((prev) => ({ ...prev, servicesOffered: e.target.value }))}
              placeholder="Services Offered" 
              className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-2 h-24"
            ></textarea>
            <select 
              value = {data.category}
              onChange={(e) => setData((prev) => ({ ...prev, category: e.target.value }))}
              className="p-2 text-center rounded-md border border-gray-300 bg-white text-black h-10 text-sm"
            >
              <option value="">Select a Category</option>
              <option value="Legal Services">Legal Services</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Accounting">Accounting</option>
              <option value="Chartered Accountant">Chartered Accountant</option>
              <option value="Skilled Trade Professionals">Skilled Trade Professionals</option>
            </select>
          </div>
          
          <p className="text-sm text-gray-900 col-span-3">
            *Enter multiple services separated by commas (e.g., Web Development, Graphic Design, SEO)
          </p>
          
          {/* Submit Button */}
          <button type="submit" className="bg-[#0574B9] text-white p-3 rounded-md font-semibold col-span-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;