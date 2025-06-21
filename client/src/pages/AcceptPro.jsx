import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = import.meta.env.VITE_API_URL;

const AdminInquiriesPage = () => {
  const [professionals, setProfessionals] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try{
        const res = await axios.get(`${API_URL}/recievePro`, {
          withCredentials: true,
        });
        setProfessionals(res.data);
        toast.info("Profiles fetched successfully")
      }catch(error){
        toast.info(error.response?.data?.message || "Something went wrong");
        if(error.status === 401){
          navigate("/login")
        }
      }
    };
    fetch();
  }, []);

  const handleAccept = async(id) => {
    try {
      const res = await axios.patch(
        `${API_URL}/approvePro`,{
          professionalId : id
        },{
          withCredentials: true
        }
      )
        if(res.status == 200){
          toast.success(res.data.message)
        }else{
          toast.error(res.data.message)
        }
      setProfessionals((prev) => prev.filter((pro) => pro._id !== id));
      
    } catch (error) {
      toast.error(err.res?.data?.message || 'Something went wrong. Try again!');
    }

  }
return (
  <div className="bg-white min-h-screen">
    {/* Top Navigation Bar */}
    <div className="bg-[#0071BC] text-white py-4 px-6 flex items-center">
      <i className="fas fa-arrow-left text-2xl cursor-pointer"></i>
      <h2 className="text-lg sm:text-2xl font-semibold mx-auto">Professional Profile Listing Requests</h2>
    </div>

    {/* Inquiry Cards */}
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {professionals &&
        professionals.map((inquiry, index) => (
          <div
            key={index}
            className="bg-[#DDF0FA] rounded-2xl shadow-md p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src={inquiry.profilePicture}
                alt={inquiry.fullName}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-black">{inquiry.fullName}</h3>
              <div className="flex items-center justify-center sm:justify-start text-sm text-gray-600 mt-1">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {inquiry.location}
              </div>
              <div className="mt-2 text-gray-700 text-sm sm:text-base">
                <p><span className="font-semibold">email</span> : {inquiry.email}</p>
                <p><span className="font-semibold">profession</span> : {inquiry.profession}</p>
                <p><span className="font-semibold">phone</span> : {inquiry.phone}</p>
                <p><span className="font-semibold">About</span> : {inquiry.bio  }</p>
                <p className="mt-1"><span className="font-semibold">services offered</span> : {inquiry.servicesOffered}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row sm:flex-col gap-3 items-center justify-center">
              <button
                onClick={() => handleAccept(inquiry._id)}
                className="bg-[#0574B9] hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold w-28"
              >
                Accept
              </button>
              <button
                className="bg-[#E57373] hover:bg-[#f44336] text-white px-6 py-2 rounded-md font-semibold w-28"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
    </div>
  </div>
);

};

export default AdminInquiriesPage;
