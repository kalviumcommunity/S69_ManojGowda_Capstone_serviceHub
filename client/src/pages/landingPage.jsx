import React from 'react';
import NavBar from '../components/navBar';
import bgImage from '../assets/bg.jpeg';
import '../App.css';
import pro1 from '../assets/pro1.webp';
import pro2 from '../assets/pro2.webp';
import pro3 from '../assets/pro3.webp';
import l3 from '../assets/l3.webp';
import l4 from '../assets/l4.jpeg';
import Footer from "../components/footer";
import {Link} from 'react-router-dom'
 
function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      
  <div className="relative min-h-screen w-full">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center filter brightness-75 contrast-95"
      style={{ backgroundImage: `url(${bgImage})` }}
    />

    {/* Navbar */}
    <div className="relative z-10">
      <NavBar />
    </div>

    {/* Centered Text */}
    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="font-[Inria-Serif] font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Connect with trusted professionals <br />
          and get the services you need
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[#EEEEEE] font-semibold mt-2">
          Effortlessly and Securely!
        </p>
        <Link to="/signup"><button className="bg-[#0574B9] text-[#EEEEEE] text-base sm:text-lg md:text-xl mt-6 px-4 sm:px-6 py-2 rounded-lg font-normal hover:bg-[#045a8d] transition cursor-pointer">
          Get Started
        </button></Link>
      </div>
    </div>
  </div>
      {/* Reviews Section */}
      <div className="bg-black text-white py-8 sm:py-12 md:py-16">
        <h3 className="font-[Inria-Serif] text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12">
          What our users are saying
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Review Card 1 */}
          <div className="flex flex-col items-center text-center bg-[#181818] p-4 sm:p-6 rounded-lg shadow-lg">
            <img src={pro1} alt="User 1" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4" />
            <p className="mb-4 text-sm sm:text-base">Highly professional and detail-oriented. Always delivers top-notch work with a great attitude!</p>
            <div className="flex gap-1 text-yellow-400">
              ⭐⭐⭐⭐
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="flex flex-col items-center text-center bg-[#181818] p-4 sm:p-6 rounded-lg shadow-lg">
            <img src={pro2} alt="User 2" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4" />
            <p className="mb-4 text-sm sm:text-base">Highly professional and detail-oriented. Always delivers top-notch work with a great attitude!</p>
            <div className="flex gap-1 text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="flex flex-col items-center text-center bg-[#181818] p-4 sm:p-6 rounded-lg shadow-lg">
            <img src={pro3} alt="User 3" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4" />
            <p className="mb-4 text-sm sm:text-base">Highly professional and detail-oriented. Always delivers top-notch work with a great attitude!</p>
            <div className="flex gap-1 text-yellow-400">
              ⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-black text-white py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16">
          {/* Blog Item 1 */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6">
              5 Essential Tips for Hiring a Professional You Can Trust
            </h1>
            <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md">
              <ul className="space-y-3 sm:space-y-4 text-center text-base sm:text-lg">
                <li>Check Reviews & Testimonials</li>
                <li>Verify Credentials & Experience</li>
                <li>Communicate Clearly & Set Expectations</li>
                <li>Avoid Unrealistic Promises</li>
                <li>Secure Payments & Agreements</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img 
              src={l4} 
              alt="Blog Image 1" 
              className="w-full max-w-md h-auto object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center items-center">
            <img 
              src={l3} 
              alt="Blog Image 2" 
              className="w-full max-w-md h-auto object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6">
              5 Essential Tips for Hiring a Professional You Can Trust
            </h1>
            <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md">
              <ul className="space-y-3 sm:space-y-4 text-center text-base sm:text-lg">
                <li>Check Reviews & Testimonials</li>
                <li>Verify Credentials & Experience</li>
                <li>Communicate Clearly & Set Expectations</li>
                <li>Avoid Unrealistic Promises</li>
                <li>Secure Payments & Agreements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default LandingPage;