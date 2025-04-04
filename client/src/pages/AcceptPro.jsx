import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

const AdminInquiriesPage = () => {
  const [professionals, setProfessionals] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:3010/api/recievePro", {
        withCredentials: true,
      });
      setProfessionals(res.data);
    };
    fetch();
  }, []);

  const handleAccept = async(id) => {
    console.log(id)
    const res = await axios.patch(
      "http://localhost:3010/api/approvePro",{
        professionalId : id
      },{
        withCredentials: true
      }
    )
    setProfessionals((prev) => prev.filter((pro) => pro._id !== id));
    console.log(res.data);
  }
  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen p-6 text-white">
      {/* Header */}
      <div className="flex items-center mb-6">
        <i className="fas fa-arrow-left text-2xl cursor-pointer"></i>
        <h2 className="text-2xl font-bold mx-auto">Professional Profile Listing Requests</h2>
      </div>

      {/* Inquiry Cards */}
      <div className="space-y-6">
        {professionals &&
          professionals.map((inquiry, index) => (
            <div
              key={index}
              className="bg-[#3a3a3a] p-6 rounded-xl shadow-lg flex flex-col sm:flex-row gap-6"
            >
              {/* Profile Picture */}
              <div className="flex justify-center sm:block sm:min-w-[80px]">
                <img
                  src={inquiry.profilePicture}
                  alt={inquiry.fullname}
                  className="w-45 h-45 rounded-full object-cover border-2 border-white"
                />
              </div>

              {/* Content and Buttons Grid */}
              <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-4 w-full">
                {/* Left: Details */}
                <div className="flex-1">
                  <p className="text-xl font-bold">{inquiry.fullName}</p>
                  <p className="text-sm text-gray-300">{inquiry.profession}</p>

                  <div className="grid sm:grid-cols-2 gap-y-1 text-sm text-gray-200 mt-2">
                    <p><i className="fas fa-map-marker-alt mr-1"></i>{inquiry.location}</p>
                    <p><i className="fas fa-envelope mr-1 "></i>{inquiry.email}</p>
                    <p><i className="fas fa-phone mr-1"></i>{inquiry.phone}</p>
                    <p><i className="fas fa-briefcase mr-1"></i>Services: {inquiry.servicesOffered}</p>
                  </div>

                  <p className="mt-3 text-sm italic text-gray-300">“{inquiry.bio}”</p>
                </div>

                {/* Right: Buttons */}
                <div className="flex sm:flex-col gap-3 sm:justify-start justify-center items-center sm:items-end">
                  <button onClick={() => handleAccept(inquiry._id)} className="bg-[#0574B9]  text-white px-4 py-2 rounded-md font-semibold w-32">
                    ACCEPT
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold w-32">
                    REJECT
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminInquiriesPage;
