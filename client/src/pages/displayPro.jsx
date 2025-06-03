import React, { useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const ProfileCard = () => {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const navigate= useNavigate()
  const [pro,setPro] = useState()
  useEffect(()=>{
    const fetch = async() => {
      const proRes = await axios.get(`http://localhost:3010/api/professional/pro?id=${id}`, {
        withCredentials: true,
      });
      console.log(proRes.data)
      setPro(proRes.data)
    }
    fetch()
  },[id])
  const handleClick = () => {
    navigate(`/inquiry?id=${id}`)
  }
  return (
    <>
    {pro ?
      <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen flex items-center justify-center p-4 text-white relative">
      
      {/* Home Icon */}
      <div className="absolute top-4 left-4 text-white text-2xl cursor-pointer hover:text-gray-300">
        {/* <FaHome /> */}
      </div>
      

      <div className="flex flex-col md:flex-row gap-6 p-4 pt-10 sm:p-6 rounded-lg shadow-lg w-full max-w-5xl">
        
        {/* Left Section */}
        <div className="bg-[#FFFAFA]/60 p-4 sm:p-6 rounded-lg flex flex-col items-center shadow-md w-full md:w-1/3 relative">
          <img 
            src={pro.profilePicture} 
            alt="Jeremy Rose" 
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4" 
          />
          <h4 className="text-xl sm:text-2xl font-bold mb-2 font-[Judson]">{pro.fullName}</h4>
          
          {/* Star Rating */}
          <div className="flex text-yellow-500 mt-2 text-sm sm:text-base">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          
          <p className="m-2 sm:m-4 font-[Judson] text-[#0574B9] text-sm sm:text-base">
            Year of Experience: <span className="font-semibold font-[Judson] text-white">{pro.experience} years</span>
          </p>
          <p className="m-2 sm:m-3 font-[Judson] text-[#0574B9] text-sm sm:text-base">
            Availability Status: <span className="font-semibold font-[Judson] text-white">{pro.availability}</span>
          </p>
          <a href="#" className="text-blue-600 hover:underline mt-2 text-sm sm:text-base">LinkedIn</a>
        </div>

        {/* Right Section */}
        <div className="bg-[#FFFAFA]/60 p-4 sm:p-6 rounded-lg shadow-md w-full md:w-2/3">
          <div className="flex flex-row sm:flex-row justify-between mr-0 sm:mr-3 items-center sm:items-center gap-2 sm:gap-0">
            <h4 className="text-xl sm:text-2xl font-bold mb-2 font-[Judson]">{pro.fullName}</h4>
            {/* <FaPencilAlt className="text-white cursor-pointer hover:text-gray-700 transition text-lg sm:text-base" /> */}
          </div> 

          <p className="flex items-center text-sm sm:text-base">
            <CiLocationOn className="inline text-white text-lg sm:text-base"/> {pro.location}
          </p>
          
          <div className="mt-3 space-y-2 text-sm sm:text-base">
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">Email: </span> 
              {pro.email}
            </p>
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">Profession: </span> 
              {pro.profession}
            </p>
            {/* <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">Phone: </span> 
              9090910910
            </p> */}
            <p className="font-[Judson]">
              <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">Services Offered: </span> 
              {pro.servicesOffered.map((item,i)=>(
                <span key={i}>{item},&nbsp;</span>
              ))}
            </p>
          </div>

          <p className="mt-4 leading-relaxed font-[Judson] text-sm sm:text-lg">
            <span className="font-semibold text-[#0574B9] text-xs sm:text-sm">About: </span> 
            {pro.bio}
          </p> 

          {/* Centered Button */}
          <div className="flex justify-center mt-5">
            <button onClick={handleClick} className="bg-[#0574B9] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-500 transition text-sm sm:text-base">
              send Inquiry
            </button>
          </div>   
        </div>
      </div>
    </div>
    : <></>}
    </>
  );
};

export default ProfileCard;
