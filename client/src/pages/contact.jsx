import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:3010/api/contact", {
        name,
        email,
        message,
      });

      if (res.status === 200) {
        setStatus("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121111] to-[#787878] text-white flex items-center">
      <div className="max-w-xl mx-auto p-4 shadow-[0_2px_6px_rgba(255,255,255,0.2)] shadow-white rounded-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <form className="space-y-7" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded h-24 bg-transparent text-white placeholder-gray-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
          {status && (
            <p className="text-sm mt-2 text-center text-gray-200">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}