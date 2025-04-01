import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Profile from "../components/Profile";
import pro1 from "../assets/pro1.webp";

const professionals = [
  {
    id: 1,
    name: "Jeremy Rose",
    rating: 5,
    description:
      "I am a senior attorney with 15+ years of experience in corporate law, intellectual property, criminal defense, and real estate law. A Harvard Law graduate and NY State Bar member, I offer expert legal consultation, contract drafting, and litigation support. Fluent in English and Spanish, you can reach me at jeremy@gmail.com or visit my office at 123 Legal Street, New York, NY 10001.",
    image: pro1,
  },
  {
    id: 2,
    name: "Emily Carter",
    rating: 4,
    description:
      "Expert in contract law with 10+ years of experience helping startups and corporations navigate legal challenges.",
    image: pro1,
  },
  {
    id: 3,
    name: "Daniel Smith",
    rating: 5,
    description:
      "Specializes in real estate law, property transactions, and dispute resolution with 12+ years of experience.",
    image: pro1,
  }
];

const ProfessionalsList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121111] to-[#787878] p-6">
      {/* Header */}
      <div className="flex items-center justify-center text-white mb-6 relative">
        <FaArrowLeft className="text-xl cursor-pointer absolute left-4" />
        <h1 className="text-3xl font-bold text-center">LEGAL SERVICES</h1>
      </div>

      {/* Professionals List */}
      <div className="space-y-6 m-10">
        {professionals.map((pro) => (
          <Profile key={pro.id} {...pro} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsList;
