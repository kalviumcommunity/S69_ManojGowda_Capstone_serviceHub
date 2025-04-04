import React, { useEffect,useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Profile from "../components/Profile";
import { useLocation,useNavigate } from "react-router-dom";
import axios from 'axios'


const ProfessionalsList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get("title");
  const navigate = useNavigate()

  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3010/api/professionals/category?category=${encodeURIComponent(title)}`,
          { withCredentials: true }
        );
        setProfessionals(res.data)
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching professionals:", error);
      }
    };

    if (title) {
      fetchData();
    }
  }, [title]);

  const handleBack  = () => {
    navigate(-1)
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121111] to-[#787878] p-6">
      {/* Header */}
      <div className="flex items-center justify-center text-white mb-6 relative">
        <FaArrowLeft onClick={handleBack} className="text-xl cursor-pointer absolute left-4" />
        <h1 className="text-3xl font-bold text-center">{title}</h1>
      </div>

      {/* Professionals List */}
      <div className="space-y-6 m-10">
        {professionals.map((pro,i) => (
          <Profile key={i} {...pro} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsList;
