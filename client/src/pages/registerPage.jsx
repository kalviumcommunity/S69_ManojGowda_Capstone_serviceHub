import React from "react";
import { FaHome } from "react-icons/fa";
import bgImg from '../assets/bg.jpeg';
import {Link} from 'react-router-dom'


function Register() {
  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75 contrast-95"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Home Button */}
      <div className="absolute top-4 left-4">
        <Link to="/"><button className="text-white text-3xl">
          <FaHome />
        </button></Link>
      </div>

      {/* Form Container */}
      <div className="relative bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg w-[80%] max-w-4xl">
        <h2 className="text-3xl font-[Inknut-Antiqua] text-center text-black mb-6">
          Register as Professional
        </h2>
        <form className="grid grid-cols-3 gap-4">
          {/* Personal Details */}
          <input type="text" placeholder="Full name" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <input type="email" placeholder="Email" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <input type="text" placeholder="Location" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          
          <input type="text" placeholder="Phone" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <input type="file" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <textarea placeholder="Bio" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1 h-20"></textarea>

          {/* Professional Details */}
          <input type="text" placeholder="Profession" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <input type="text" placeholder="Experience" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          <input type="text" placeholder="Availability" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-1" />
          
          <textarea placeholder="Services Offered" className="p-3 rounded-md border border-gray-300 bg-white text-black col-span-3 h-24"></textarea>
          <p className="text-sm text-gray-900 col-span-3">
            *Enter multiple services separated by commas (e.g., Web Development, Graphic Design, SEO)
          </p>
          
          {/* Submit Button */}
          <button className="bg-[#0574B9] text-white p-3 rounded-md font-semibold col-span-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;