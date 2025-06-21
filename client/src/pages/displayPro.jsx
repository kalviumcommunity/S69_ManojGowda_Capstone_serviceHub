import React, { useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const ProfileCard = () => {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const navigate= useNavigate()
  const [pro,setPro] = useState()
  useEffect(()=>{
    const fetch = async() => {
      const proRes = await axios.get(`${API_URL}/professional/pro?id=${id}`, {
        withCredentials: true,
      });
      setPro(proRes.data)
    }
    fetch()
  },[id])
  const handleClick = () => {
    navigate(`/inquiry?id=${id}`)
  }
  const handleNav = () => {
    navigate(`/inquiry?id=${id}`)
  }

  return (
    <>
      {pro ? (
        <div className="min-h-screen bg-white text-black">
          {/* Navbar */}
        <div className="bg-[#0074C1] h-14 w-full flex items-center justify-center shadow text-white relative">
          <p className="text-white text-4xl font-[judson] font-semibold">{pro.fullName}</p>
        </div>


          {/* Content */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-6 p-15 md:pt-30">
            {/* Left Card */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 flex flex-col items-center w-full md:w-1/3">
              <img
                src={pro.profilePicture}
                alt={pro.fullName}
                className="w-46 h-46 rounded-full object-cover mb-4"
              />
              <div className="flex text-yellow-500 text-lg">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="mt-2 text-2xl font-[judson] font-semibold">{pro.fullName}</h3>
              <p className="text-gray-500 mt-5 text-sm">Year of experience : <span className="text-black font-medium">{pro.experience} years</span></p>
              <p className="text-gray-500 mt-3 text-sm">Availability Status : <span className="text-black font-medium">{pro.availability}</span></p>
              <a href="#" className="text-blue-700 mt-2 text-sm hover:underline">linkedIn<i className="fab fa-linkedin ml-1"></i></a>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 w-full md:w-2/3">
            <h3 className="mt-2 text-3xl font-[judson] font-semibold">{pro.fullName}</h3>
              <p className="flex items-center text-sm text-gray-600 mt-1">
                <CiLocationOn className="mr-1 text-base" /> {pro.location}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
                <span><strong className=" text-gray-700 ">email :</strong> {pro.email}</span>
                <span><strong className="text-gray-700">profession :</strong> {pro.profession}</span>
                <span><strong className="text-gray-700">phone :</strong> 9038247684</span>
              </div>
              <div className="text-sm text-gray-600 mt-4">
                <span><strong className=" text-gray-700">services offered :</strong></span> {pro.servicesOffered.join(", ")}
              </div>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                <span className=" text-gray-700 text-justify text-base leading-relaxed tracking-normal break-words max-w-[100%] sm:text-left sm:tracking-normal sm:break-normal sm:max-w-none">
                  <strong >about :</strong>  {pro.bio}</span>
              </p>
              <button
                onClick={handleNav}
                className="mt-6 px-4 py-2 bg-[#0074C1] text-white rounded  text-sm"
              >
                send inquiries
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProfileCard;
