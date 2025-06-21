import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Profile from "../components/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { RotateLoader } from "react-spinners";
const API_URL = import.meta.env.VITE_API_URL;

const ProfessionalsList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get("title");
  const navigate = useNavigate();

  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/professionals/category?category=${encodeURIComponent(title)}`,
          { withCredentials: true }
        );
        setTimeout(() => {
          setProfessionals(res.data);
          setLoading(false);
        }, 700);
      } catch (error) {
        console.error("Error fetching professionals:", error);
        if(error.status === 401){
          navigate("/login")
        }
      }
    };
    if (title) {
      fetchData();
    }
  }, [title]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-center py-10 text-xl flex justify-center items-center">
        <RotateLoader color="#0074C1" />
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0074C1] w-full py-4 shadow-md flex items-center justify-center relative">
        <FaArrowLeft
          onClick={handleBack}
          className="text-white text-lg cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2"
        />
        <h1 className="text-white text-2xl sm:text-3xl font-[judson] font-bold uppercase tracking-wide">
          {title}
        </h1>
      </div>

      {/* Professionals List */}
      <div className="space-y-6 px-4 sm:px-10 py-6">
        {professionals.map((pro, i) => (
          <Profile key={i} {...pro} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsList;
