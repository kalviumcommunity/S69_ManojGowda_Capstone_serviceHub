import React from 'react';
import { useNavigate } from 'react-router-dom';
const ServiceSection = ({ title, description, image, reverse, buttonText = "explore", imageAlt }) => {
  
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/list?title=${encodeURIComponent(title)}`);  
  }

  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-between p-6 bg-dark-card text-white my-4 rounded-lg`}>
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4 uppercase">{title}</h2>
        <p className=" mb-4">{description}</p>
        <button onClick={handleClick} className="bg-[#0574B9]  text-blue-button px-4 py-2 rounded hover:bg-blue-button hover:text-white transition">
          {buttonText}
        </button>
      </div>
      <div className="md:w-1/2 p-4">
        <img src={image} alt={imageAlt} className="w-full  object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default ServiceSection;