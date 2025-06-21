import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPencilAlt, FaArrowLeft} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import logOut from '../assets/logOut.svg'
const API_URL = import.meta.env.VITE_API_URL;
const CLOUDINARY_API = import.meta.env.VITE_CLOUDINARY_API;

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({
    name: "", phone: "", profession: "", location: "", picture: ""
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);


    useEffect(() => {
      const fetchUser = async () => {
        try {
          const res = await axios.get(`${API_URL}/user`, {
            withCredentials: true,
          });
          setUser(res.data);
          setEditData(res.data);
        } catch (error) {
          console.error("Error fetching user:", error);
          if(error.status === 401){
          navigate("/login")
        }
        }
      };
      fetchUser();
    }, [refresh]);


  const handleBack = () => navigate(-1);

  const handleLogout = async () => {
    await axios.post(`${API_URL}/auth/logout`, {}, 
    { withCredentials: true });
    navigate("/");
  };

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

  const handleEditSubmit = async () => {
    try {
      await axios.put(`${API_URL}/user-update`, editData, {
        withCredentials: true,
      });
      setEdit(false);
      setRefresh(prev => !prev); // trigger fetch again
    } catch (err) {
      console.error(err.message);
    }
  };


  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/delete`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FB]">
      {/* Navbar */}
      <div className="bg-[#0574B9] h-14 flex items-center justify-between px-4 text-white shadow">
        <FaArrowLeft onClick={handleBack} className="text-xl cursor-pointer" />

        <div className="flex items-center gap-4">
          <button onClick={handleLogout} className="text-sm  ">
            <img src={logOut} className="w-8 h-8"></img>
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex justify-center px-4 sm:px-6 md:py-40 md:px-10 py-6">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-4xl w-full">
          {/* Profile Picture */}
          {user && (
            <img
              src={user.picture}
              alt="Profile"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-md"
            />
          )}

          {/* Details */}
          <div className="md:ml-10 mt-6 md:mt-0 w-full text-center md:text-left">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h2 className="text-2xl font-semibold text-gray-900">{user?.name}</h2>
              <FaPencilAlt
                className="cursor-pointer self-end sm:self-auto text-gray-500 hover:text-black"
                onClick={() => setEdit(true)}
              />
            </div>

            <p className="flex items-center justify-center md:justify-start text-gray-600 mt-2">
              <CiLocationOn className="mr-1" /> {user?.location || "Unknown"}
            </p>

            <div className="mt-4 text-gray-700 space-y-1">
              <p><strong>Profession:</strong> {user?.profession}</p>
              <p><strong>Phone:</strong> {user?.phone}</p>
              <p><strong>Email:</strong> {user?.email}</p>
            </div>

            <button
              onClick={() => navigate("/inquiryDisplay")}
              className="bg-[#0574B9] text-white px-4 py-2 rounded-lg  mt-4 w-full sm:w-auto"
            >
              Inquiry History
            </button>
            {user?.role === "professional" && 
            <button
             onClick={() => navigate("/register")}
             className="bg-green-700 text-white md:ml-10 px-4 py-2 rounded-lg  mt-4 w-full sm:w-auto"
            >Register as professional</button>

            }
            {user?.role === "admin" && 
            <button
             onClick={() => navigate("/verify")}
             className="bg-green-700 text-white md:ml-10 px-4 py-2 rounded-lg  mt-4 w-full sm:w-auto"
            >Accept Professionals</button>

            }
            <button
            onClick={() => setShowDeleteConfirm(true)}
            className="bg-amber-700 text-white md:ml-10 px-4 py-2 rounded-lg  mt-4 w-full sm:w-auto"
          >
            Delete
          </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {edit && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/3 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Edit Profile</h2>
            <input
              type="text"
              placeholder="Name"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              value={editData.phone}
              onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Profession"
              value={editData.profession}
              onChange={(e) => setEditData({ ...editData, profession: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={editData.location}
              onChange={(e) => setEditData({ ...editData, location: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files[0])}
              className="w-full"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setEdit(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
              <button onClick={handleEditSubmit} className="px-4 py-2 bg-[#0574B9] text-white rounded hover:bg-blue-700">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0  backdrop-blur-sm bg-white/2 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-bold text-red-600">Confirm Deletion</h2>
            <p className="mt-2 text-gray-600">Are you sure you want to delete your profile? This action is irreversible.</p>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setShowDeleteConfirm(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
