import React from "react";
import { MapPin, Pencil } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-gray-900 flex justify-center items-center p-6">
      <div className="flex gap-10 max-w-5xl w-full">
        {/* Left Card - Profile */}
        <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-80 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            className="w-36 h-36 rounded-full mx-auto mb-4"
          />
          <div className="flex justify-center space-x-1 mb-2">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
          </div>
          <h2 className="text-lg font-bold">Jeremy Rose</h2>
          <p className="text-gray-400 text-sm">Year of experience: <span className="text-white">5 years</span></p>
          <p className="text-gray-400 text-sm">Availability Status: <span className="text-white">Full-time</span></p>
          <a href="#" className="text-blue-400 text-sm mt-2 inline-block">LinkedIn 🔗</a>
        </div>

        {/* Right Card - Details */}
        <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg flex-1 relative">
          <div className="absolute top-4 right-4 flex items-center text-gray-400 cursor-pointer">
            <Pencil size={16} /> <span className="ml-1 text-sm">Edit</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Jeremy Rose</h2>
          <p className="flex items-center text-gray-400 text-sm mb-4">
            <MapPin size={16} className="mr-1" /> Mumbai
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-white">Email:</span> jeremy@gmail.com &nbsp; | &nbsp;
            <span className="font-semibold text-white">Profession:</span> Lawyer &nbsp; | &nbsp;
            <span className="font-semibold text-white">Phone:</span> 9038247684
          </p>
          <p className="text-gray-400 text-sm mt-4">
            <span className="font-semibold text-white">Services Offered:</span> Legal Consultation, Contract Drafting, Will & Estate Planning, Business Incorporation, Litigation Support.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            <span className="font-semibold text-white">About:</span> I am a senior attorney with over 15 years of experience specializing in corporate law, intellectual property, criminal defense, and real estate law. Fluent in English and Spanish, I provide expert legal consultation and litigation support.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Check Inquiries
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
