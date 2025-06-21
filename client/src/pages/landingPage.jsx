import React from 'react';
import NavBar from '../components/navBar';
import bgImage from '../assets/bg.jpeg';
import '../App.css';
import img3 from '../assets/image.png';
import Footer from "../components/footer";
import img1 from '../assets/landing1.jpg'
import img2 from '../assets/image 33.png'
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
      {/* <div className="bg-black text-white py-8 sm:py-12 md:py-16">
        <h3 className="font-[Inria-Serif] text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12">
          What our users are saying
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16">

          <div className="flex flex-col items-center text-center bg-[#181818] p-4 sm:p-6 rounded-lg shadow-lg">
            <img src={pro1} alt="User 1" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4" />
            <p className="mb-4 text-sm sm:text-base">Highly professional and detail-oriented. Always delivers top-notch work with a great attitude!</p>
            <div className="flex gap-1 text-yellow-400">
              ⭐⭐⭐⭐
            </div>
          </div>


          <div className="flex flex-col items-center text-center bg-[#181818] p-4 sm:p-6 rounded-lg shadow-lg">
            <img src={pro2} alt="User 2" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4" />
            <p className="mb-4 text-sm sm:text-base">Highly professional and detail-oriented. Always delivers top-notch work with a great attitude!</p>
            <div className="flex gap-1 text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>


          <div className="flex flex-col items-center text-center bg-[#181818] p-4 sm:p-6 rounded-lg shadow-lg">
            <img src={pro3} alt="User 3" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4" />
            <p className="mb-4 text-sm sm:text-base">Highly professional and detail-oriented. Always delivers top-notch work with a great attitude!</p>
            <div className="flex gap-1 text-yellow-400">
              ⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div> */}

      {/* Blog Section */}
      <div className="bg-white text-white py-8 sm:py-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16">
          {/* Blog Item 1 */} 
          <div className="flex flex-col justify-center ">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-[Georgia] font-semibold text-black leading-tight mb-6">
              Essential Tips for Hiring<br />
              Professional, You Can<br/> Trust.
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              When choosing a professional service, it's important to check reviews and testimonials,
              verify their credentials and experience, and ensure clear communication. Set realistic
              expectations from the start, avoid providers who make unrealistic promises, and always use
              secure methods for payments and agreements to protect yourself.
            </p>
          </div>

    {/* Right Side - Image */}
    <div className="flex justify-center items-center">
      <img 
        src={img1} 
        alt="Professional Woman" 
        className="w-full  h-auto object-cover rounded-lg shadow-lg"
      />
    </div>

      <div className="flex justify-center items-center mt-15">
            <img 
              src={img2} 
              alt="Blog Image 2" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-15">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-[Georgia] font-semibold text-black leading-tight mb-6">
              How to Spot a Reliable Service Provider <br></br>Online.
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              When choosing a professional service, it's important to check reviews 
              and testimonials, verify their credentials and experience, and ensure 
              clear communication. Set realistic expectations from the start, avoid 
              providers who make unrealistic promises, and always use secure methods
              for payments and agreements to protect yourself.
            </p>
          </div>
          
          <div className="flex flex-col justify-center mt-15">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-[Georgia] font-semibold text-black leading-tight mb-6">
              The Future of Professional Services.
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              When choosing a professional service, it's important to check reviews and testimonials,
              verify their credentials and experience, and ensure clear communication. Set realistic
              expectations from the start, avoid providers who make unrealistic promises, and always use
              secure methods for payments and agreements to protect yourself.
            </p>
          </div>

    {/* Right Side - Image */}
    <div className="flex justify-center items-center mt-15">
      <img 
        src={img3} 
        alt="Professional Woman" 
        className="w-full  h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
        </div>
        </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default LandingPage;