import React from "react";

const InquiryForm = () => {
  return (
    <div className="bg-gradient-to-b from-[#121111] to-[#787878] min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#FFFAFA]/50  p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl sm:text-3xl font-bold font-[Judson] text-white">
          Inquiry Form
        </h2>

        <form className="mt-4">
          <label className="block text-white font-[Judson] text-lg">Service Required</label>
          <input
            type="text"
            className="w-full p-2 mt-1 bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-white font-[Judson] text-lg mt-4">Message</label>
          <textarea
            rows="4"
            className="w-full p-2 mt-1 bg-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <div className="flex justify-center mt-6">
            <button className="bg-[#0574B9] text-white px-6 py-2 rounded-md font-[Judson] hover:bg-blue-500 transition">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
