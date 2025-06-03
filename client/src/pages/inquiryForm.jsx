import React,{useState,useEffect} from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InquiryForm = () => {
  const params = new URLSearchParams(window.location.search); // ✅ corrected
  const id = params.get("id");

  const [pro, setPro] = useState();
  const [check, setCheck] = useState(false);

  const [query, setQuery] = useState({professionalId:"", message:"", serviceRequested:""})

  useEffect(() => {
  if (id) {
    setQuery(prev => ({ ...prev, professionalId: id }));
    const fetch = async () => {
      const proRes = await axios.get(
        `http://localhost:3010/api/professional/pro?id=${id}`,
        { withCredentials: true }
      );
      console.log(proRes.data);
      setPro(proRes.data);
      setCheck(true);
    };
    fetch();
  }
  }, [id]);

  const handleSubmit =async (e) => {
    e.preventDefault();
    setQuery({professionalId:"", message:"", serviceRequested:""})
    const sendData = await axios.post(
      `http://localhost:3010/api/inquiry`,
       query,{
        withCredentials : true
      }
    )
    
    if (sendData.message) {
      toast.success(`Inquiry sent to ${pro.fullName}`);
      console.log(sendData.data)
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#FFFAFA]/50  p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl sm:text-3xl font-bold font-[Judson] text-white">
          Inquiry Form
        </h2>

        <form className="mt-4" onSubmit={handleSubmit}>
        <label className="block text-white font-[Judson] text-lg">To</label>
          <input
            type="text"
            value={check ?  pro.fullName : ""}
            className="w-full p-2 mt-1 bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="block text-white font-[Judson] text-lg">Service Required</label>
          <input
            type="text"
            value={query.serviceRequested}
            onChange = {(e) => setQuery((prev) => ({...prev, serviceRequested : e.target.value}))}
            className="w-full p-2 mt-1 bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-white font-[Judson] text-lg mt-4">Message</label>
          <textarea
            rows="4"
            value={query.message}
            onChange={(e) => setQuery((prev) => ({...prev, message : e.target.value}))}
            className="w-full p-2 mt-1 bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-[#0574B9] text-white px-6 py-2 rounded-md font-[Judson] hover:bg-blue-500 transition">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
