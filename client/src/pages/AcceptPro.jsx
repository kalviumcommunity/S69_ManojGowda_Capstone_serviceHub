import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import pro1 from '../assets/pro1.webp';

const adminInquiries = [
  {
    recipient: "Jeremy Rose",
    recipientImage: pro1,
    location: "Mumbai",
    email: "jeremy@gmail.com",
    profession: "Lawyer",
    phone: "9038247684",
    services: "Legal Consultation, Contract Drafting, Will & Estate Planning, Business Incorporation, Litigation Support",
  },
  {
    recipient: "Jeremy Rose",
    recipientImage: pro1,
    location: "Mumbai",
    email: "jeremy@gmail.com",
    profession: "Lawyer",
    phone: "9038247684",
    services: "Legal Consultation, Contract Drafting, Will & Estate Planning, Business Incorporation, Litigation Support",
  },
];

const AdminInquiriesPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen p-6 text-white">
      {/* Header */}
      <div className="flex items-center mb-6">
        <i className="fas fa-arrow-left text-2xl cursor-pointer"></i>
        <h2 className="text-2xl font-bold mx-auto">Professional Profile Listing Requests</h2>
      </div>

      {/* Admin Inquiry Cards */}
      <div className="space-y-6">
        {adminInquiries.map((inquiry, index) => (
          <div
            key={index}
            className="bg-[#4a4a4a] p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6"
          >
            {/* Recipient Image */}
            <div className="flex flex-col items-center text-center">
              <img
                src={inquiry.recipientImage}
                alt={inquiry.recipient}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>

            {/* Recipient Details */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-lg font-semibold">{inquiry.recipient}</p>
              <div className=" text-sm mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                <span>
                  <i className="fas fa-map-marker-alt mr-1"></i>
                  {inquiry.location}
                </span>
                <span>email: {inquiry.email}</span>
                <span>profession: {inquiry.profession}</span>
                <span>phone: {inquiry.phone}</span>
              </div>
              <p className="text-sm mt-2">
                services offered: {inquiry.services}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button className="bg-[#0574B9] text-white px-4 py-2 rounded-md font-semibold ">
                ACCEPT
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700">
                REJECT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminInquiriesPage;