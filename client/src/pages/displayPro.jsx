import React from "react";
import pro3 from "../assets/pro3.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CiLocationOn } from "react-icons/ci";


const ProfileCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen flex items-center justify-center p-4 text-white">
      <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg shadow-lg w-full max-w-5xl">
        
        {/* Left Section */}
        <div className="bg-[#FFFAFA]/60 p-6 rounded-lg flex flex-col items-center shadow-md w-full md:w-1/3 relative">
          
          {/* Edit Icon */}

          <img src={pro3} alt="Jeremy Rose" className="w-40 h-40 rounded-full object-cover mb-4" />
          <h4 className="text-2xl font-bold mb-2 font-[Judson]">Jeremy Rose</h4>

          {/* Star Rating */}
          <div className="flex text-yellow-500 mt-2">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>

          <p className="m-4 font-[Judson] text-[#0574B9]">Year of Experience: <span className="font-semibold font-[Judson] text-white">5 years</span></p>
          <p className="m-3 font-[Judson] text-[#0574B9]">Availability Status: <span className="font-semibold font-[Judson] text-white">Full time</span></p>
          <a href="#" className="text-blue-600 hover:underline mt-2">LinkedIn</a>
        </div>

        {/* Right Section */}
        <div className="bg-[#FFFAFA]/60 p-6 rounded-lg shadow-md w-full md:w-2/3">
        

          <h4 className="text-2xl font-bold mb-2 font-[Judson]">Jeremy Rose</h4>
          <p className=""><CiLocationOn className="inline text-white"/>&nbsp;Mumbai</p>
          
          <div className="mt-3 space-y-2">
            <p className="font-[Judson] text-lg"><span className="font-semibold text-[#0574B9] text-sm">Email:&nbsp;</span> jeremyrose@gmail.com</p>
            <p className="font-[Judson] text-lg"><span className="font-semibold text-[#0574B9] text-sm">Profession:&nbsp;</span> Lawyer</p>
            <p className="font-[Judson] text-lg"><span className="font-semibold text-[#0574B9] text-sm">Phone:&nbsp;</span> 9090910910</p>
            <p className="font-[Judson] text-lg">
              <span className="font-semibold text-[#0574B9] text-sm">Services Offered:</span> Legal Consultation, Contract Drafting, Will & Estate Planning, Business Incorporation, Litigation Support
            </p>
          </div>

          <p className="mt-4 leading-relaxed font-[Judson] text-lg">
            <span className="font-semibold text-[#0574B9] text-sm">About:</span> I am a senior attorney with over 15 years of experience specializing in corporate law, intellectual property, criminal defense, and real estate law.
            I graduated from Harvard Law School and am a proud member of the New York State Bar Association. Fluent in English and Spanish, I provide expert legal consultation, 
            contract drafting, litigation support, and various other legal services. Feel free to reach out to me via email or visit my office at 123 Legal Street, New York, NY 10001.
          </p> 

          {/* Centered Button */}
          <div className="flex justify-center mt-5">
            <button className="bg-[#0574B9] text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition">
              Send Inquiry
            </button>
          </div>   
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;
