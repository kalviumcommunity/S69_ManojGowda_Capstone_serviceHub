import { React, useEffect, useState } from 'react';
import ServiceSection from '../components/serviceSection';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import lawImage from '../assets/law.jpg';
import accountingImage from '../assets/accounting.webp';
import digitalMarketingImage from '../assets/digital-marketing.jpg';
import caImage from '../assets/chartered-accountant-services.jpg';
import tradeImage from '../assets/service_professionalsinc_cover.jpeg';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [user, setUser] = useState();
  const [pro, setPro] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_URL}/user`, {
          withCredentials: true
        });
        setUser(res.data);
        if (res.data.role === "professional") {
          const proRes = await axios.get(`${API_URL}/professional`, {
            withCredentials: true,
          });
          setPro(true);
          setUser(proRes.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        if(error.status === 401){
          navigate("/login")
        }
      }
    };

    fetchUser();
  }, []);

const services = [
    {
      title: 'Legal Services',
      description: 'Law is the foundation of a just and orderly society, ensuring fairness, accountability, and the protection of individual rights. Whether navigating corporate regulations, settling disputes, or seeking justice, expert legal guidance is essential. Our platform connects you with experienced lawyers specializing in various fields, from corporate law and intellectual property to criminal defense and estate planning. Get the right legal support tailored to your needs and make informed decisions with confidence.',
      image: lawImage,
      imageAlt: 'Law books and gavel',
      reverse: false,
    },
    {
      title: 'Accounting',
      description: 'Accounting is the systematic process of recording, analyzing, and interpreting financial transactions of a business or individual. It plays a crucial role in tracking income, expenses, assets, and liabilities, ensuring financial stability and compliance with legal regulations. Businesses rely on accounting to make informed decisions, prepare financial statements, and assess profitability. Key aspects of accounting include bookkeeping, tax preparation, auditing, and financial reporting. Whether for small businesses or large corporations, accurate accounting helps maintain transparency and optimize financial performance.',
      image: accountingImage,
      imageAlt: 'Accounting documents',
      reverse: true,
    },
    {
      title: 'Digital Marketing',
      description: 'Digital marketing is the practice of promoting products or services using online channels such as search engines, social media, email, and websites. It encompasses various strategies, including search engine optimization (SEO), content marketing, pay-per-click (PPC) advertising, and social media marketing. Businesses leverage digital marketing to reach a global audience, engage with customers in real time, and drive brand awareness. With data-driven insights and targeted campaigns, digital marketing helps businesses optimize their reach and visibility in the digital space.',
      image: digitalMarketingImage,
      imageAlt: 'Digital marketing icons',
      reverse: false,
    },
    {
      title: 'Chartered Accountant',
      description: 'Chartered Accountancy is a prestigious profession that plays a crucial role in financial management, auditing, taxation, and business advisory services. CAs ensure compliance with financial regulations, provide strategic financial planning, and help businesses optimize their financial health. Their expertise spans across industries, assisting organizations in making informed decisions based on financial analysis and risk assessment. Whether in corporate finance, taxation, or auditing, CAs provide invaluable support to businesses.',
      image: caImage,
      imageAlt: 'Chartered Accountancy logo',
      reverse: true,
    },
    {
      title: 'Skilled Trade Professionals',
      description: 'From electricians and plumbers to carpenters and mechanics, skilled trade professionals play a crucial role in our daily lives. They ensure that homes and businesses run smoothly by maintaining electrical, plumbing, and structural systems. Whether it’s fixing a leak, installing a new fixture, or troubleshooting an electrical issue, these experts provide reliable and essential services to keep everything in working order. Their expertise and hands-on skills are invaluable for maintaining comfort, safety, and functionality in every space.',
      image: tradeImage,
      imageAlt: 'Skilled trade professionals banner',
      reverse: false,
    },
  ];

  const handleLogout = async () => {
    await axios.post(`${API_URL}/auth/logout`, {}, 
      { withCredentials: true });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Header */}
      <header className="bg-[#106BA3] text-white py-4 shadow-md">
        <div className="flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          {/* Home */}
          <Link to="/" className="text-2xl">
            <FaHome />
          </Link>

          {/* Title */}
          <h1 className="text-base sm:text-md md:text-3xl font-semibold font-[judson] text-center flex-1 mx-4 truncate">
            Your One-Stop Hub for Professional Services
          </h1>

          {/* Profile */}
          <Link to={pro ? "/pro" : "/profile"} className="w-15 h-15 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
            {user && (
              <img src={pro ? user.profilePicture : user.picture} alt="profile" className="w-full h-full object-cover" />
            )}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-8 grid gap-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            imageAlt={service.imageAlt}
            reverse={service.reverse}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-[#106BA3] text-white py-2 px-4 md:px-6 flex justify-between items-center text-sm">
        <span>© 2025 ServiceHub</span>
        <button onClick={handleLogout} className="bg-transparent border border-white px-4 py-1 rounded">
          Logout
        </button>
      </footer>
    </div>
  );
};

export default App;
