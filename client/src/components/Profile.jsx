// Profile.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = ({ fullName, rating, bio, profilePicture, _id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/proProfile?id=${_id}`);
  };

  return (
    <div className="bg-[#E9F4FB] flex flex-col sm:flex-row items-center p-15 rounded-xl shadow-md border border-[#C8E0F4]">
      <img
        src={profilePicture}
        alt={fullName}
        className="w-24 h-24 sm:w-42 sm:h-42 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6 border border-white shadow"
      />

      <div className="text-center sm:text-left w-full">
        <h2 className="text-lg sm:text-3xl font-bold font-[judson] text-[#1C1C1C]">{fullName}</h2>

        <div className="flex justify-center sm:justify-start text-yellow-500 my-1">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

          <p className="text-justify text-base leading-relaxed tracking-normal break-words max-w-[100%] sm:text-left sm:tracking-normal sm:break-normal sm:max-w-none">
            {bio}
          </p>


        <button
          onClick={handleClick}
          className="mt-3 bg-[#0074C1] text-white text-sm px-6 py-2.5 rounded"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Profile;
