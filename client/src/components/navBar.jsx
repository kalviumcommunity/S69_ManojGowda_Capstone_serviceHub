import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom'
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent w-full px-4 sm:px-8 lg:px-16 py-4 absolute top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Title */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Buttons */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto absolute md:static top-16 left-0 bg-black md:bg-transparent px-4 md:px-0 py-4 md:py-0`}
        >
          <div className="flex flex-col md:flex-row md:gap-4 lg:gap-6 text-white">
           <Link to="/signup"><button className="font-[Junge] text-base sm:text-lg px-3 py-2 md:px-4 md:py-2 rounded-lg font-normal hover:text-gray-300 transition cursor-pointer">
              Sign up
            </button></Link> 
            <Link to="/login"><button className="font-[Junge] text-base sm:text-lg px-3 py-2 md:px-4 md:py-2 rounded-lg font-normal hover:text-gray-300 transition cursor-pointer">
              Login
            </button></Link>
            <Link to="/faq"><button className="font-[Junge] text-base sm:text-lg px-3 py-2 md:px-4 md:py-2 rounded-lg font-normal hover:text-gray-300 transition cursor-pointer">
              FAQ
            </button></Link>
            <Link to="/about"><button className="font-[Junge] text-base sm:text-lg px-3 py-2 md:px-4 md:py-2 rounded-lg font-normal hover:text-gray-300 transition cursor-pointer">
              About Us
            </button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;