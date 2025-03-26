import React from "react";
import "../App.css";
import logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
        
        {/* Left Section: Logo, Input, and Button */}
        <div className="flex flex-col items-center sm:items-start gap-6 w-full sm:w-auto">
          {/* Logo and text */}
          <div className="flex items-center gap-2 sm:gap-4">
            <img 
              draggable="false" 
              src={logo} 
              className="h-8 sm:h-10 md:h-12 w-auto" 
              alt="logo" 
            />
            <h4 className="font-[JetBrains-Mono] font-bold text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              serviceHub
            </h4>
          </div>

          {/* Input box and button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-4 sm:mt-6">
            <input
              type="text"
              placeholder="Share your views..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 text-white border border-gray-500 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <button
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Right Section: Links, Social Icons, and Copyright */}
        <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-6 mt-6 sm:mt-0">
          {/* Links */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 lg:gap-6">
            <a 
              href="#" 
              className="text-white text-sm sm:text-base hover:text-gray-300 transition"
            >
              Contact us
            </a>
            <a 
              href="#" 
              className="text-white text-sm sm:text-base hover:text-gray-300 transition"
            >
              FAQ
            </a>
            <a 
              href="#" 
              className="text-white text-sm sm:text-base hover:text-gray-300 transition"
            >
              Privacy policy
            </a>
            <a 
              href="#" 
              className="text-white text-sm sm:text-base hover:text-gray-300 transition"
            >
              Terms of use
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-white hover:text-gray-300 transition text-lg sm:text-xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition text-lg sm:text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition text-lg sm:text-xl">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm sm:text-base">
            <p>© 2025 serviceHUB</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;