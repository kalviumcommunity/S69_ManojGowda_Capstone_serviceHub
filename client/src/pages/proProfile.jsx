import React from "react";
import pro3 from "../assets/pro3.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CiLocationOn } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";

const ProfileCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen flex items-center justify-center p-4 text-white relative">
      
      {/* Home Icon */}
      <div className="absolute top-4 left-4 text-white text-2xl cursor-pointer hover:text-gray-300">
        <FaHome />
      </div>
      
      {/* Wallet Section */}
      <div className="absolute top-4 right-4 flex items-center gap-2 md:bg-[#FFFAFA]/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md">
        <IoWalletOutline className="text-white text-lg sm:text-xl" />
        <span className="text-white text-base sm:text-lg">Wallet: 100</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-4 pt-10 sm:p-6 rounded-lg shadow-lg w-full max-w-5xl">
        
        {/* Left Section */}
        <div className="bg-[#FFFAFA]/60 p-4 sm:p-6 rounded-lg flex flex-col items-center shadow-md w-full md:w-1/3 relative">
          <img 
            src={pro3} 
            alt="Jeremy Rose" 
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4" 
          />
          <h4 className="text-xl sm:text-2xl font-bold mb-2 font-[Judson]">Jeremy Rose</h4>
          
          {/* Star Rating */}
          <div className="flex text-yellow-500 mt-2 text-sm sm:text-base">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          
          <p className="m-2 sm:m-4 font-[Judson] text-[#0574B9] text-sm sm:text-base">
            Year of Experience: <span className="font-semibold font-[Judson] text-white">5 years</span>
          </p>
          <p className="m-2 sm:m-3 font-[Judson] text-[#0574B9] text-sm sm:text-base">
            Availability Status: <span className="font-semibold font-[Judson] text-white">Full time</span>
          </p>
          <a href="#" className="text-blue-600 hover:underline mt-2 text-sm sm:text-base">LinkedIn</a>
        </div>

        {/* Right Section */}
        <div className="bg-[#FFFAFA]/60 p-4 sm:p-6 rounded-lg shadow-md w-full md:w-2/3">
          <div className="flex flex-row sm:flex-row justify-between mr-0 sm:mr-3 items-center sm:items-center gap-2 sm:gap-0">
            <h4 className="text-xl sm:text-2xl font-bold mb-2 font-[Judson]">Jeremy Rose</h4>
            <FaPencilAlt className="text-white cursor-pointer hover:text-gray-700 transition text-lg sm:text-base" />
          </div> 

          <p className="flex items-center text-sm sm:text-base">
            <CiLocationOn className="inline text-white text-lg sm:text-base"/> Mumbai
          </p>
          
          <div className="mt-3 space-y-2 text-sm sm:text-base">
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">Email: </span> 
              jeremyrose@gmail.com
            </p>
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">Profession: </span> 
              Lawyer
            </p>
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">Phone: </span> 
              9090910910
            </p>
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">Services Offered: </span> 
              Legal Consultation, Contract Drafting, Will & Estate Planning, Business Incorporation, Litigation Support
            </p>
          </div>

          <p className="mt-4 leading-relaxed font-[Judson] text-sm sm:text-lg">
            <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">About: </span> 
            I am a senior attorney with over 15 years of experience specializing in corporate law, intellectual property, criminal defense, and real estate law.
            I graduated from Harvard Law School and am a proud member of the New York State Bar Association. Fluent in English and Spanish, I provide expert legal consultation, 
            contract drafting, litigation support, and various other legal services. Feel free to reach out to me via email or visit my office at 123 Legal Street, New York, NY 10001.
          </p> 

          {/* Centered Button */}
          <div className="flex justify-center mt-5">
            <button className="bg-[#0574B9] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-500 transition text-sm sm:text-base">
              Check Inquiry
            </button>
          </div>   
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;