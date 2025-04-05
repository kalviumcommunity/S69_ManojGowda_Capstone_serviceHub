import React from "react";
import { FaStar } from "react-icons/fa";

const Profile = ({ fullName, rating, bio, profilePicture }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 sm:p-6 rounded-lg shadow-lg w-full mt-20">
      {/* Profile Image - Adjusts for Mobile & Desktop */}
      <img 
        src={profilePicture} 
        alt={fullName} 
        className="w-24 h-24 sm:w-40 sm:h-40 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6" 
      />
      
      {/* Profile Info */}
      <div className="text-center sm:text-left w-full">
        <h2 className="text-lg sm:text-xl font-bold text-white">{fullName}</h2>
        
        {/* Star Ratings */}
        <div className="flex justify-center sm:justify-start text-yellow-400 my-2">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base">{bio}</p>

        {/* View Button */}
        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">
          View
        </button>
      </div>
    </div>
  );
};

export default Profile;
