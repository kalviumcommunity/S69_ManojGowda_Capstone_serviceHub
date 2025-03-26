import React from "react";
import bgImg from '../assets/bg.jpeg';

function Signup() {
  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">
      {/* Background Image with Filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75 contrast-95"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Form Container */}
      <div className="relative bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-[Inknut-Antiqua] text-center text-black mb-6">Signup</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <select className="w-full p-3 rounded-md border border-gray-300 bg-white text-black">
            <option value="">Client</option>
            <option value="user">Professional</option>
          </select>
          <input type="password" placeholder="Password" className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <input type="password" placeholder="Confirm Password" className="w-full p-3 rounded-md border border-gray-300 bg-white text-black" />
          <p className="text-center text-black">
            Already have an account? <a href="#" className="text-blue-600">Login</a>
          </p>
          <button className="w-full bg-[#0574B9] text-white p-3 rounded-md font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
