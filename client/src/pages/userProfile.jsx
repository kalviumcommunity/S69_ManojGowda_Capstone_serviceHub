import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPencilAlt, FaArrowLeft } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({ name: "", email: "", profession: "", phone: "", picture: "" });
  const [previewImage, setPreviewImage] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3010/api/user", {
          withCredentials: true,
        });
        console.log(res.data)
        setUser(res.data);
        setEditData(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleEdit = () => setEdit(true);
  const handleCancel = () => setEdit(false);

  const handleEditData = async () => {
    try {
      const res = await axios.put("http://localhost:3010/api/user-update", editData, {
        withCredentials: true,
      });
      console.log(res.data);
      setUser(editData);
      setEdit(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete("http://localhost:3010/api/delete", {
        withCredentials: true,
      });
      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleImageUpload = async (file) => {
    if (file) {
      await uploadToCloudinary(file);
    }
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "profile_pictures");
    formData.append("folder", "ProfilePictures");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dkc1u2o0n/image/upload",
        formData
      );
      setEditData((prev) => ({ ...prev, picture: res.data.secure_url }));
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen flex items-center justify-center p-4 text-white relative">
      <FaArrowLeft onClick={handleBack} className="text-xl cursor-pointer absolute left-5 top-7" />
      <div className="bg-[#FFFAFA]/60 p-4 sm:p-8 rounded-lg flex flex-col md:flex-row md:space-x-4 items-center md:items-start shadow-lg w-full max-w-md md:max-w-2xl">
        {edit ? (
          <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-4">
              <label className="text-gray-300 font-semibold">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setPreviewImage(URL.createObjectURL(file));
                    handleImageUpload(file);
                  }
                }}
                className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md w-full cursor-pointer mt-2"
              />
              {previewImage && <img src={previewImage} alt="Preview" className="mt-3 w-24 h-24 rounded-full border border-gray-500 object-cover" />}
            </div>
            <div className="mt-3 space-y-3 text-sm sm:text-base w-full">
              <label className="text-blue-400 font-semibold">Name</label>
              <input type="text" name="name" value={editData.name} onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })} className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md w-full" />

              <label className="text-blue-400 font-semibold">Email</label>
              <input type="text" name="email" value={editData.email} onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })} className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md w-full" />

              <label className="text-blue-400 font-semibold">Profession</label>
              <input type="text" name="profession" value={editData.profession} onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })} className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md w-full" />

              <label className="text-blue-400 font-semibold">Phone</label>
              <input type="number" name="phone" value={editData.phone} onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })} className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md w-full" />
            </div>

            <div className="flex mt-5 w-full space-x-3">
              <button onClick={handleEditData} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full">
                Save
              </button>
              <button onClick={handleCancel} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition w-full">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full md:grid md:grid-cols-[1fr_2fr] flex flex-col items-center md:items-start text-start md:text-left">
            {user && (
              <div className="md:flex">
                <img src={user?.picture} referrerPolicy="no-referrer" alt="Profile" className="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 object-cover border-4 border-gray-500" />
              </div>
            )}
            <div className="mt-3 space-y-2 text-sm sm:text-base w-full">
              <div className="flex flex-col md:flex-row items-center w-full">
                <h2 className="text-lg sm:text-2xl font-bold">{user && user.name}</h2>
                <FaPencilAlt onClick={handleEdit} className="block cursor-pointer hover:text-gray-900 transition text-lg ml-auto" />
              </div>
              <p className="text-sm text-gray-200 italic"><span className="font-semibold text-[#0574B9]">Role: </span> {user?.role}</p>
              <p className="flex  md:justify-start  text-sm sm:text-base mt-2">
                <CiLocationOn className="text-lg mr-1" /> {user && user.location}
              </p>
              <p>
                <span className="font-semibold text-[#0574B9]">Email: </span>
                {user && user.email}
              </p>
              <p>
                <span className="font-semibold text-[#0574B9]">Profession: </span>
                {user && user.profession}
              </p>
              <p>
                <span className="font-semibold text-[#0574B9]">Phone: </span>
                {user && user.phone}
              </p>

              {user?.role === "client" && (
                <button onClick={() => navigate("/register")} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700  transition mt-4">
                  Register as Professional
                </button>
              )}

              <div className="md:flex md:flex-row  md:gap-2 mt-5">
                <button className="bg-[#0574B9] text-white px-4 py-2 mr-4 rounded-lg hover:bg-blue-500 transition">Inquiry History</button>
                <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition" onClick={() => setShowConfirm(true)}>
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <p className="text-gray-800 font-semibold">Are you sure you want to delete your account?</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={handleDelete}>
                Confirm
              </button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
