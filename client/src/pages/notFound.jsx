import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#121111] to-[#787878]">
      {/* Content */}
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg w-96 text-center">
        <h1 className="text-6xl font-bold text-white">4<span className="text-red-500">0</span>4</h1>
        <h2 className="text-2xl font-semibold text-white mt-2">Page Not Found</h2>
        <p className="text-white mt-4">Oops! The page you're looking for doesn't exist.</p>

        {/* Home Button */}
        <button 
          onClick={() => navigate("/")} 
          className="mt-6 bg-[#0574B9] text-white p-3 rounded-md font-semibold hover:bg-[#035a8b] transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
