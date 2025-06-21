import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-GB");
};

const getStatusProps = (status) => {
  switch (status) {
    case "Pending":
      return { color: "text-[#FBB521]", icon: "fas fa-scroll" };
    case "Accepted":
      return { color: "text-[#00E676]", icon: "fas fa-calendar-check" };
    case "Rejected":
      return { color: "text-[#FF4D4F]", icon: "fas fa-times-circle" };
    default:
      return { color: "text-gray-400", icon: "fas fa-question-circle" };
  }
};

const InquiriesPage = () => {
  const [user, setUser] = useState(null);
  const [inq, setInq] = useState();
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_URL}/user`, {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user", err);
        if(error.status === 401){
          navigate("/login")
        }
      }
    };

    const fetchInquiries = async () => {
      try {
        const res = await axios.get(`${API_URL}/showInquiry`, {
          withCredentials: true,
        });
        setInq(res.data || []);
      } catch (err) {
        console.error("Error fetching inquiries", err);
      }
    };

    fetchUser();
    fetchInquiries();
  }, [inq]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0574B9] text-white py-4 px-4 sm:px-6 flex items-center">
        <i
          className="fas fa-arrow-left text-xl cursor-pointer mr-4"
          onClick={() => navigate(-1)}
        ></i>
        <h2 className="text-xl sm:text-2xl font-bold mx-auto">Inquiries</h2>
      </div>

      {/* Inquiry Cards */}
      <div className="space-y-6 mt-6 px-4 sm:px-6 pb-6">
        {inq && inq.map((inquiry, index) => (
          <div
            key={index}
            className="bg-[#D6ECF3] p-5 sm:p-10 rounded-3xl shadow-md grid grid-cols-1 sm:grid-cols-3 gap-4 items-center"
          >
            {/* Sender */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xs sm:text-sm text-gray-600">To</span>
              <img
                src={inquiry.professional.profilePicture}
                alt={inquiry.professional.fullName}
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover mt-2"
              />
              <p className="mt-2 font-semibold text-base sm:text-lg text-black">
                {inquiry.professional.fullName}
              </p>
            </div>

            {/* Date & Status */}
            <div className="flex flex-col items-center text-center border-y sm:border-x sm:border-y-0 border-gray-300 py-4 sm:py-0">
              <p className="text-gray-500 text-sm sm:text-md">Date</p>
              <p className="text-lg sm:text-xl font-semibold text-black mt-1">
                {formatDate(inquiry.inquiry.createdAt)}
              </p>

              <p className="text-gray-500 text-sm sm:text-md mt-4">Status</p>
              {(() => {
                const { color, icon } = getStatusProps(inquiry.inquiry.status);
                return (
                  <p className={`font-bold text-base sm:text-xl flex items-center ${color} mt-2`}>
                    <i className={`${icon} mr-2`}></i>
                    {inquiry.inquiry.status}
                  </p>
                );
              })()}

              <button
                className="mt-4 bg-[#0574B9] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-sm sm:text-base"
                onClick={() => {
                  setSelectedInquiry(inquiry);
                  setIsModalOpen(true);
                }}
              >
                Details
              </button>
            </div>

            {/* Receiver */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xs sm:text-sm text-gray-600">By</span>
              <img
                src={inquiry.client.picture}
                alt={inquiry.client.name}
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover mt-2"
              />
              <p className="mt-2 font-semibold text-base sm:text-lg text-black">
                {inquiry.client.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedInquiry && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50 px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-gray-900 bg-opacity-95 rounded-xl shadow-xl max-w-lg w-full p-6 relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer hover:text-red-400 transition"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close Modal"
            >
              &times;
            </button>

            <h3 className="text-2xl sm:text-3xl font-bold mb-6 border-b border-gray-700 pb-3">
              Inquiry Details
            </h3>

            <div className="space-y-4 text-sm sm:text-lg">
              <p><span className="font-semibold">From:</span> {selectedInquiry.client.name}</p>
              <p><span className="font-semibold">To:</span> {selectedInquiry.professional.fullName}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">Status:</span>
                {user?.role === "professional" ? (
                  <select
                    className="px-3 py-1 rounded-md bg-white text-black font-medium"
                    value={selectedInquiry.inquiry.status}
                    onChange={async (e) => {
                      const newStatus = e.target.value;
                      try {
                        await axios.put(
                          `${API_URL}/updateInquiryStatus/${selectedInquiry._id}`,
                          { status: newStatus },
                          { withCredentials: true }
                        );
                        setInq((prev) =>
                          prev.map((i) =>
                            i.inquiry._id === selectedInquiry._id
                              ? { ...i, inquiry: { ...i.inquiry, status: newStatus } }
                              : i
                          )
                        );
                        setSelectedInquiry((prev) => ({
                          ...prev,
                          inquiry: { ...prev.inquiry, status: newStatus },
                        }));
                      } catch (error) {
                        console.error("Failed to update status", error);
                      }
                    }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                ) : (
                  <span>{selectedInquiry.inquiry.status}</span>
                )}
              </div>
              <p><span className="font-semibold">Date:</span> {formatDate(selectedInquiry.inquiry.createdAt)}</p>
              <p><span className="font-semibold">Message:</span> {selectedInquiry.inquiry.message || "No message provided"}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InquiriesPage;
