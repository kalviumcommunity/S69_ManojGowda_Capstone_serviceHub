import React from 'react';
// import { FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import pro3 from '../assets/pro3.webp'
import '@fortawesome/fontawesome-free/css/all.min.css';


const ProfileCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen flex items-center justify-center p-10 text-white">
      <div className="flex flex-col md:flex-row gap-10  p-6 rounded-lg shadow-lg w-full max-w-5xl">
        
        {/* Right Section */}
        <div className="right bg-[#FFFAFA]/60  p-6 rounded-lg flex flex-col items-center shadow-md w-full md:w-1/3">
          <img src={pro3} alt="Jeremy Rose" className="w-50 h-50 rounded-full object-cover mb-4" />
          <h5 className="text-2xl font-semibold font-[Judson]">Jeremy Rose</h5>

          {/* Star Rating */}
          <div className="flex text-yellow-500 mt-2">
            <i className="fa-solid fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>

          <p className="text-[#F5F5F5] font-regular m-4">Year of Experience: <span className=" text-white">5 years</span></p>
          <p className="text-[#F5F5F5] font-regular m-3">Availability Status: <span className=" text-white">Full time</span></p>
          <a href="#" className="text-blue-600 hover:underline mt-2">LinkedIn</a>
        </div>

        {/* Left Section */}
        <div className="left bg-[#FFFAFA]/60 p-6 rounded-lg shadow-md w-full md:w-2/3">
          <h4 className="text-2xl font-bold mb-2">Jeremy Rose</h4>
          <p className="text-gray-600">📍 Mumbai</p>
          
          <div className="mt-3 space-y-2">
            <p><span className="font-semibold">Email:</span> jeremyrose@gmail.com</p>
            <p><span className="font-semibold">Profession:</span> Lawyer</p>
            <p><span className="font-semibold">Phone:</span> 9090910910</p>
            <p><span className="font-semibold">Services Offered:</span> Legal Consultation, Contract Drafting, Will & Estate Planning, Business Incorporation, Litigation Support</p>
          </div>

          <p className="mt-4 text-white-800 leading-relaxed">
            <span className="font-semibold">About:</span> I am a senior attorney with over 15 years of experience specializing in corporate law, intellectual property, criminal defense, and real estate law.
            I graduated from Harvard Law School and am a proud member of the New York State Bar Association. Fluent in English and Spanish, I provide expert legal consultation, 
            contract drafting, litigation support, and various other legal services. Feel free to reach out to me via email at jeremy@gmail.com or visit my office at 123 Legal Street,
            New York, NY 10001.
          </p> 

          <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Check Inquiry</button>   
        </div>

      </div>
    </div>

  );
};

export default ProfileCard;

{/* <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        {/* Left Section: Profile Picture and Basic Info */}
    //     <div className="flex flex-col items-center p-6 bg-gray-600 text-white w-full md:w-1/3">
    //       <img
    //         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    //         alt="Jeremy Rose"
    //         className="w-32 h-32 rounded-full border-4 border-white mb-4"
    //       />
    //       <div className="flex items-center mb-2">
    //         <span className="text-yellow-400 text-xl">★★★★★</span>
    //       </div>
    //       <h2 className="text-xl font-bold">Jeremy Rose</h2>
    //       <p className="text-sm">Year of experience: 5 years</p>
    //       <p className="text-sm">Availability Status: Full-time</p>
    //       <a href="#linkedin" className="mt-4 text-blue-400">
    //         <FaLinkedin size={24} />
    //       </a>
    //     </div>

    //     {/* Right Section: Detailed Info */}
    //     <div className="p-6 text-white w-full md:w-2/3">
    //       <div className="flex justify-between items-center mb-4">
    //         <div className="flex items-center">
    //           <FaMapMarkerAlt className="mr-2 text-gray-400" />
    //           <span>Mumbai</span>
    //         </div>
    //         <button className="text-gray-400 hover:text-white">Edit ✏️</button>
    //       </div>

    //       <div className="mb-4">
    //         <p>
    //           <span className="font-semibold">email:</span> jeremy@gmail.com{' '}
    //           <span className="font-semibold">profession:</span> Lawyer{' '}
    //           <span className="font-semibold">phone:</span> 9038247684
    //         </p>
    //       </div>

    //       <div className="mb-4">
    //         <p>
    //           <span className="font-semibold">services offered:</span> Legal Consultation, Contract Drafting, Will & Estate Planning Business Incorporation, Litigation Support
    //         </p>
    //       </div>

    //       <div className="mb-4">
    //         <p>
    //           <span className="font-semibold">about:</span> I am a senior attorney with over 15 years of experience specializing in corporate law, intellectual property, criminal defense, and real estate law. I graduated from Harvard Law School and am a proud member of the New York State Bar Association. Fluent in English and Spanish, I provide expert legal consultation, contract drafting, litigation support, and various other legal services. Feel free to reach out to me via email at jeremy@gmail.com or visit my office at 123 Legal Street, New York, NY 10001.
    //         </p>
    //       </div>

    //       <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
    //         check inquiries
    //       </button>
    //     </div>
    //   </div>
    // </div> */}