import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceSection = ({ title, description, image, reverse, buttonText = "Explore", imageAlt }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/list?title=${encodeURIComponent(title)}`);
  };

  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-between bg-dark-card text-white my-6 rounded-lg shadow-md`}>
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4">
        <p className="text-3xl sm:text-2xl md:text-5xl font-bold font-[judson] mb-3 text-black uppercase">{title}</p>

        <p className="text-sm sm:text-base md:text-lg text-black mb-4 leading-relaxed">
          {description}
        </p>

        <button
          onClick={handleClick}
          className="bg-[#0574B9] text-white px-4 py-2 rounded  transition"
        >
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto max-h-64 sm:max-h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
