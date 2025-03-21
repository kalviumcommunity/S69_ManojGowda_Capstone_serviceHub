import React from 'react';
import NavBar from '../components/navBar';
import bgImage from '../assets/bg.jpeg';
import '../App.css';
import pro1 from '../assets/pro1.webp'
import pro2 from '../assets/pro2.webp'
import pro3 from '../assets/pro3.webp'
import groupPro from '../assets/groupPro.png'
import l3 from '../assets/l3.webp'
import l4 from '../assets/l4.jpeg'
import logo from '../assets/logo.svg'

function LandingPage() {
  return (
    <>
    <div className="relative h-screen w-full">
  
  {/* Background Image with Filters */}
  <div 
    className="absolute inset-0 bg-cover  filter brightness-75 contrast-95"
    style={{ backgroundImage: `url(${bgImage})` }}
  />

  {/* Navbar (Remains at the top) */}
  <div className="relative z-10">
    <NavBar />
  </div>

  {/* Centered Text */}
  <div className="absolute inset-0 flex items-center justify-center text-center">
    <p className=" font-[Inria-Serif] font-bold  text-white text-2xl sm:text-3xl lg:text-4xl">
      Connect with trusted professionals <br />
      and get the services you need<br></br>
      <p className='text-xl text-[#EEEEEE] font-semibold'>Effortlessly and Securely!</p>
      <button className=" bg-[#0574B9] text-[#EEEEEE] text-xl mt-8 px-4 py-2 rounded-lg font-normal hover:bg-[#045a8d] transition cursor-pointer">
        Get Started
      </button></p>
  </div>
   </div>

   <div className="bg-black text-white py-5">
    <h3 className="font-[Inria-Serif] text-center text-3xl font-semibold mb-8">
    What our users are saying
  </h3>

  {/* Review Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
    {/* Review Card 1 */}
    <div className="flex flex-col items-center text-center bg-[#181818] p-6 rounded-lg shadow-lg">
      <img src={pro1} alt="User 1" className="w-16 h-16 rounded-full mb-4" />
      <p className="mb-4">Highly professional and detail-oriented. Always delivers top-notch work with a great attitude!</p>
      <div className="flex gap-1">
        ⭐⭐⭐⭐
      </div>
    </div>

    {/* Review Card 2 */}
    <div className="flex flex-col items-center text-center bg-[#181818] p-6 rounded-lg shadow-lg">
      <img src={pro2} alt="User 2" className="w-16 h-16 rounded-full mb-4" />
      <p className="mb-4">Highly professional and detail-oriented. Always delivers top-notch work with a great attitude!</p>
      <div className="flex gap-1">
        ⭐⭐⭐⭐⭐
      </div>
    </div>

    {/* Review Card 3 */}
    <div className="flex flex-col items-center text-center bg-[#181818] p-6 rounded-lg shadow-lg">
      <img src={pro3} alt="User 3" className="w-16 h-16 rounded-full mb-4" />
      <p className="mb-4">Highly professional and detail-oriented. Always delivers top-notch work with a great attitude!</p>
      <div className="flex gap-1">
        ⭐⭐⭐⭐
        </div>
        </div>
      </div>
    </div>
    
    {/* Blog section */}
    <div className='grid grid-cols-2 bg-black'>
      <div class=" flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 class="text-2xl sm:text-3xl font-semibold text-center mb-6">
          5 Essential Tips for Hiring a Professional You Can Trust
        </h1>
        
        <div class="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-lg">
          <ul class="space-y-4 text-center text-lg sm:text-xl">
            <li>Check Reviews & Testimonials</li>
            <li>Verify Credentials & Experience</li>
            <li>Communicate Clearly & Set Expectations</li>
            <li>Avoid Unrealistic Promises</li>
            <li>Secure Payments & Agreements</li>
          </ul>
        </div>
      </div>

      
      <div class="flex justify-center items-center">
      <img src={l4} alt=""  className=''/>
    </div>
      <div class="flex justify-center items-center">
        <img src={l3} alt="Centered Image" class="" />
    </div>

      <div class=" flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 class="text-2xl sm:text-3xl font-semibold text-center mb-6">
          5 Essential Tips for Hiring a Professional You Can Trust
        </h1>
        
        <div class="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-lg">
          <ul class="space-y-4 text-center text-lg sm:text-xl">
            <li>Check Reviews & Testimonials</li>
            <li>Verify Credentials & Experience</li>
            <li>Communicate Clearly & Set Expectations</li>
            <li>Avoid Unrealistic Promises</li>
            <li>Secure Payments & Agreements</li>
          </ul>
        </div>
      </div>


      <div class=" flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 class="text-2xl sm:text-3xl font-semibold text-center mb-6">
          5 Essential Tips for Hiring a Professional You Can Trust
        </h1>
        
        <div class="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-lg">
          <ul class="space-y-4 text-center text-lg sm:text-xl">
            <li>Check Reviews & Testimonials</li>
            <li>Verify Credentials & Experience</li>
            <li>Communicate Clearly & Set Expectations</li>
            <li>Avoid Unrealistic Promises</li>
            <li>Secure Payments & Agreements</li>
          </ul>
        </div>
      </div>

      <img src={l4} alt=""  className=''/>

       
    </div>

    {/* Footer Section */}
    <footer className=" bg-gray-950 py-8 px-6 text-gray-300">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <img src={logo} alt="" />
          <h2 className="text-xl font-semibold text-white">serviceHub</h2>
          
          {/* Contact Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition">Contact Us</a>
            <a href="#" className="hover:text-white transition">FAQ</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">🔗</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">📧</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">📲</a>
          </div>
        </div>

        {/* Input Field */}
        <div className="mt-6 text-center">
          <p className="text-sm">Share your views</p>
          <div className="flex justify-center mt-2">
            <input type="text" placeholder="Drop over here!" className="px-4 py-2 bg-gray-800 text-white rounded-l-md outline-none focus:ring-2 focus:ring-blue-500"/>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">Submit</button>
          </div>
        </div>
      </footer>


   </>
  );
}

export default LandingPage;
