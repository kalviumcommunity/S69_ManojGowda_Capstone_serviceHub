import React from 'react';
import logo from '../assets/logo.svg';

function NavBar() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Logo & Title */}
      <div className="flex items-center gap-4">
        <img draggable="false" src={logo} className="h-12 w-12 " alt="logo" />
        <h4 className="font-['JetBrains Mono'] font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
          serviceHub
        </h4>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <button className=" text-white text-xl px-4 py-2 rounded-lg font-normal hover:text-gray-300 transition cursor-pointer">
          Sign Up
        </button>
        <button className=" text-white text-xl px-4 py-2 rounded-lg font-normal hover:text-gray-300 transition cursor-pointer">
          Login
        </button>
        <button className=" text-white text-xl px-4 py-2 rounded-lg font-normal hover:text-gray-300 transition cursor-pointer">
          Professional Register
        </button>
      </div>
    </div>
  );
}

export default NavBar;
