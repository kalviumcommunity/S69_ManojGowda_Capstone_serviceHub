import React, { useState } from "react";
import "../App.css";
import logo from '../assets/logo.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

function Footer() {
  const [box, setBox] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setBox("");
    toast("We received your message");
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Left Side: Share Views */}
          <div>
            <h2 className="font-mono text-lg mb-4">Share your views</h2>
            <form
              onSubmit={handleClick}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="text"
                placeholder="Drop over here!"
                value={box}
                onChange={(e) => setBox(e.target.value)}
                className="px-4 py-3 bg-gray-200 text-gray-700 rounded-xl placeholder-gray-500 focus:outline-none w-full sm:max-w-md"
              />
              <button
                type="submit"
                className="bg-[#0574B9] text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side: Links */}
          <div className="flex flex-wrap gap-10 justify-start lg:justify-end">
            {/* Company */}
            <div className="flex flex-col gap-2 min-w-[120px]">
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <a  className="text-sm hover:text-gray-300 cursor-pointer" onClick={() => navigate("/about")}>About Us</a>
              <a href="#" className="text-sm hover:text-gray-300">Contact Us</a>
              <a href="#" className="text-sm hover:text-gray-300">Terms of Use</a>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-2 min-w-[120px]">
              <h3 className="text-lg font-semibold mb-2">Social Media</h3>
              <a href="#" className="text-sm hover:text-gray-300">Facebook</a>
              <a href="#" className="text-sm hover:text-gray-300">Instagram</a>
              <a href="#" className="text-sm hover:text-gray-300">LinkedIn</a>
            </div>

            {/* Utility Pages */}
            <div className="flex flex-col gap-2 min-w-[120px]">
              <h3 className="text-lg font-semibold mb-2">Utility Pages</h3>
              <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-gray-300">FAQ</a>
            </div>
          </div>
        </div>

        {/* Centered Logo and Name */}
        <div className="flex justify-center items-center flex-col mb-6 text-center">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-10 sm:h-12 lg:h-14 w-auto"
              draggable="false"
            />
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[JetBrains-Mono]">
              serviceHub
            </h4>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-gray-400">
          © 2025 serviceHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
