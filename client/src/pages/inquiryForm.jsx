import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = import.meta.env.VITE_API_URL;

const InquiryForm = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const [pro, setPro] = useState();
  const [check, setCheck] = useState(false);

  const [query, setQuery] = useState({
    professionalId: "",
    message: "",
    serviceRequested: ""
  });

  useEffect(() => {
    if (id) {
      setQuery(prev => ({ ...prev, professionalId: id }));
      const fetch = async () => {
        const proRes = await axios.get(
          `${API_URL}/professional/pro?id=${id}`,
          { withCredentials: true }
        );
        setPro(proRes.data);
        setCheck(true);
      };
      fetch();
    }
  }, [id]);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const sendData = await axios.post(
      `${API_URL}/inquiry`,
      query,
      { withCredentials: true }
    );

    if (sendData.data.message) {
      toast.success(`Inquiry sent to ${pro.fullName}`);
    }

    // ✅ Reset only after successful send
    setQuery({ professionalId: "", message: "", serviceRequested: "" });

  } catch (err) {
    console.error("Error sending inquiry:", err);
    toast.error("Failed to send inquiry");
  }
};

  return (
    <div className="min-h-screen bg-white">
      
      {/* 🔷 Top Blue Navbar */}
      <div className="bg-[#0574B9] h-12 flex items-center px-4 shadow-md">

      </div>

      {/* 📄 Form Card */}
      <div className="flex justify-center items-center py-10 px-4">
        <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-center text-2xl font-bold text-black font-[Georgia] mb-6">
            Inquiry Form
          </h2>

          <form onSubmit={handleSubmit}>
             <label className="block text-black font-[Judson] text-lg">To</label>
            <input
              type="text"
              value={check ? pro.fullName : ""}
              readOnly
              className="text-black w-full p-2 mt-1 mb-2 bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block text-black font-[Georgia] text-[18px] mb-1">
              Service Required
            </label>
            <input
              type="text"
              value={query.serviceRequested}
              onChange={(e) => setQuery((prev) => ({ ...prev, serviceRequested: e.target.value }))}
              className="w-full p-2 mb-4 bg-gray-200 rounded-md outline-none"
            />

            <label className="block text-black font-[Georgia] text-[18px] mb-1">
              Message
            </label>
            <textarea
              rows="4"
              value={query.message}
              onChange={(e) => setQuery((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full p-2 mb-4 bg-gray-200 rounded-md outline-none"
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#0574B9] text-white px-6 py-2 rounded-md font-[Georgia] text-lg hover:bg-blue-600 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
