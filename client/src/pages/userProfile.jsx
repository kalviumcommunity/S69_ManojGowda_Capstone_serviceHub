import React from "react";
import pro2 from "../assets/pro2.webp";
import { FaPencilAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen flex items-center justify-center p-4 text-white relative">
      <Link to="/">
        <FaArrowLeft className="text-xl cursor-pointer absolute left-5 top-7" />
      </Link>
      <div className="bg-[#FFFAFA]/60 p-4 sm:p-8 rounded-lg flex flex-col md:flex-row md:space-x-4 items-center md:items-start shadow-lg w-full max-w-md md:max-w-2xl">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={pro2}
            alt="Profile"
            className="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 object-cover border-4 border-gray-500"
          />
        </div>

        {/* Profile Details */}
        <div className="w-full pl-10  md:flex-1 flex flex-col items-center md:items-start text-center md:text-left md:pr-0">
          <div className="flex items-center w-full">
            <h2 className="text-lg sm:text-2xl font-bold font-[Judson]">John Doe</h2>
            <FaPencilAlt className="hidden md:block cursor-pointer hover:text-gray-900 transition text-lg sm:text-base ml-auto" />
          </div>
          
          <p className="flex justify-center md:justify-start items-center text-sm sm:text-base mt-2">
            <CiLocationOn className="text-lg sm:text-base mr-1" /> Mumbai
          </p>

          <div className="mt-3 space-y-2 text-sm sm:text-base w-full">
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9]">Email: </span>&nbsp;&nbsp; johndoe@gmail.com
            </p>
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9]">Profession: </span>&nbsp;&nbsp; Lawyer
            </p>
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9]">Phone: </span>&nbsp;&nbsp; 9038247684
            </p>
          </div>

          {/* Centered Button */}
          <div className="flex justify-center md:justify-start mt-5 w-full">
            <button className="bg-[#0574B9] text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition text-sm sm:text-base">
              Inquiry History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
