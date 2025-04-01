import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import pro1 from '../assets/pro1.webp';

const inquiries = [
  {
    recipient: "Jeremy Rose",
    recipientImage: pro1, // Corrected from {pro1} to pro1
    sender: "John Doe",
    senderImage: pro1, // Corrected from {pro1} to pro1
    date: "14-03-2025",
    status: "Pending",
    statusColor: "text-yellow-500",
    statusIcon: "fas fa-clock",
  },
  {
    recipient: "Jeremy Rose",
    recipientImage: pro1, // Corrected from {pro1} to pro1
    sender: "John Doe",
    senderImage: pro1, // Corrected from {pro1} to pro1
    date: "14-03-2025",
    status: "Accepted",
    statusColor: "text-green-500",
    statusIcon: "fas fa-check-circle",
  },
];

const InquiriesPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen p-6 text-white">
      {/* Header */}
      <div className="flex items-center mb-6">
        <i className="fas fa-arrow-left text-2xl cursor-pointer"></i>
        <h2 className="text-2xl font-bold mx-auto">Inquiries</h2>
      </div>

      {/* Inquiry Cards */}
      <div className="space-y-6">
        {inquiries.map((inquiry, index) => (
          <div
            key={index}
            className="bg-[#4a4a4a] p-6 rounded-lg shadow-md grid grid-cols-3 gap-4 items-center"
          >
            {/* Recipient Section */}
            <div className="flex flex-col items-center text-center">
              <span className="text-sm text-gray-400">To</span>
              <img
                src={inquiry.recipientImage}
                alt={inquiry.recipient}
                className="w-16 h-16 rounded-full object-cover mt-2"
              />
              <p className="mt-2 font-semibold text-lg">{inquiry.recipient}</p>
            </div>

            {/* Date & Status */}
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-400 text-sm">Date</p>
              <p className="text-lg font-semibold">{inquiry.date}</p>
              <p className="text-gray-400 text-sm mt-2">Status</p>
              <p className={`font-semibold ${inquiry.statusColor} flex items-center`}>
                <i className={`${inquiry.statusIcon} mr-2`}></i>
                {inquiry.status}
              </p>
            </div>

            {/* Sender Section */}
            <div className="flex flex-col items-center text-center">
              <span className="text-sm text-gray-400">By</span>
              <img
                src={inquiry.senderImage}
                alt={inquiry.sender}
                className="w-16 h-16 rounded-full object-cover mt-2"
              />
              <p className="mt-2 font-semibold text-lg">{inquiry.sender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InquiriesPage;