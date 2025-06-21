import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CiLocationOn } from "react-icons/ci";
import { FaPencilAlt, FaHome } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const CLOUDINARY_API = import.meta.env.VITE_CLOUDINARY_API;

const ProfileCard = () => {
  const [pro, setPro] = useState();
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);


  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${API_URL}/professional`, {
          withCredentials: true,
        });
        setPro(res.data);
      } catch (error) {
        if(error.status === 401){
          navigate("/login")
        }
      }
    };
    fetch();
  }, []);

  const handleNav = () => {
    navigate("/inquiryDisplay");
  };

    const handleLogout = async () => {
    await axios.post(`${API_URL}/auth/logout`, {}, 
    { withCredentials: true });
    navigate("/");
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({
    experience: '',
    location: '',
    availability: '',
    bio: '',
    servicesOffered: '',
    picture: ''
  });

  const handleImageUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "profile_pictures");
  formData.append("folder", "ProfilePictures");

  try {
    const res = await axios.post(
      `${CLOUDINARY_API}`,
      formData
    );
    setEditData((prev) => ({ ...prev, picture: res.data.secure_url }));
  } catch (err) {
    console.error("Image upload failed", err);
  }
};

const handleUpdate = async () => {
  try {
    const payload = {
      ...editData,
      userId: pro.userId,
    };
    const res = await axios.put(`${API_URL}/update-pro`, payload,{
      withCredentials : true
    });
    setPro(res.data.professional);
    setShowEditModal(false);
  } catch (err) {
    console.error("Update failed", err);
  }
};



  return (
    <>
      {pro ? (
        <div className="min-h-screen bg-white text-black">
          {/* Navbar */}
          <div className="bg-[#0074C1] h-14 w-full flex items-center justify-between px-4 shadow text-white">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
              <FaHome className="text-xl" />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-md text-white">
                <IoWalletOutline className="text-xl" />
                <span className="text-sm">wallet : 100</span>
              </div>
              <div className="cursor-pointer flex items-center gap-1 text-white"  onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i>
                <span className="text-sm">logout</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col  p-15 md:flex-row items-start justify-center gap-6  md:pt-30">
            {/* Left Card */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 flex flex-col items-center w-full md:w-1/3">
              <img
                src={pro.profilePicture}
                alt={pro.fullName}
                className="w-36 h-36 rounded-full object-cover mb-4"
              />
              <div className="flex text-yellow-500 text-lg">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="mt-2 text-2xl font-[judson] font-bold">{pro.fullName}</h3>
              <p className="text-gray-500 mt-5 text-sm">Year of experience : <span className="text-black font-medium">{pro.experience} years</span></p>
              <p className="text-gray-500 mt-3 text-sm">Availability Status : <span className="text-black font-medium">{pro.availability}</span></p>
              <a href="#" className="text-blue-700 mt-2 text-sm hover:underline">linkedIn<i className="fab fa-linkedin ml-1"></i></a>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 w-full md:w-2/3">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-[judson] font-bold">{pro.fullName}</h3>
                <FaPencilAlt className="text-gray-500 text-sm cursor-pointer" onClick={() => {
                    setEditData({
                      experience: pro.experience,
                      location: pro.location,
                      availability: pro.availability,
                      bio: pro.bio,
                      servicesOffered: pro.servicesOffered.join(", "),
                      picture: pro.profilePicture
                    });
                    setShowEditModal(true);
                  }} />

              </div>
              <p className="flex items-center text-sm text-gray-600 mt-1">
                <CiLocationOn className="mr-1 text-base" /> {pro.location}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
                <span><strong className="text-gray-700">email :</strong> {pro.email}</span>
                <span><strong className="text-gray-700">profession :</strong> {pro.profession}</span>
                <span><strong className="text-gray-700">phone :</strong> 9038247684</span>
              </div>
              <div className="text-sm text-gray-600 mt-4">
                <strong><span className=" text-gray-700">services offered :</span></strong> {pro.servicesOffered.join(", ")}
              </div>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                <strong><span className=" text-gray-700">about :</span></strong> {pro.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={handleNav}
                  className="px-4 py-2 bg-[#0074C1] text-white rounded hover:bg-blue-600 text-sm"
                >
                  check inquiries
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {showDeleteConfirm && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/2 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-bold text-red-600">Confirm Deletion</h2>
            <p className="mt-2 text-gray-600">
              Are you sure you want to delete your profile? This action is irreversible.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {showEditModal && (
        <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
            <div className="space-y-3">
              <input type="file" onChange={(e) => handleImageUpload(e.target.files[0])} className="w-full" />
              <strong><span>Experience</span></strong>
              <input type="text" placeholder="Experience (years)" value={editData.experience} onChange={(e) => setEditData({ ...editData, experience: e.target.value })} className="w-full p-2 border rounded" />
              <strong><span>Location</span></strong>
              <input type="text" placeholder="Location" value={editData.location} onChange={(e) => setEditData({ ...editData, location: e.target.value })} className="w-full p-2 border rounded" />
              <strong><span>Availability</span></strong>
              <input type="text" placeholder="Availability" value={editData.availability} onChange={(e) => setEditData({ ...editData, availability: e.target.value })} className="w-full p-2 border rounded" />
              <strong><span>Services Offered (comma-separated)</span></strong>
              <input type="text" placeholder="Services Offered (comma-separated)" value={editData.servicesOffered} onChange={(e) => setEditData({ ...editData, servicesOffered: e.target.value })} className="w-full p-2 border rounded" />
              <strong><span>About</span></strong>
              <textarea placeholder="Bio" value={editData.bio} onChange={(e) => setEditData({ ...editData, bio: e.target.value })} className="w-full p-2 border rounded" rows={3} />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setShowEditModal(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
              <button onClick={handleUpdate} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Update</button>
            </div>
          </div>
        </div>
      )}


    </>
  );
};

export default ProfileCard;
