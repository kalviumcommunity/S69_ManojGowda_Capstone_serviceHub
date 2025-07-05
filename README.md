# 🛠️ ServiceHub

**ServiceHub** is a full-stack web application that bridges the gap between skilled service professionals and clients. It offers a seamless experience for users to discover, and connect with verified professionals across various service categories — such as Legal, Accounting, Marketing, Skilled Trades, and more.

---

## 🎯 Core Features

### 🧑‍💼 For Professionals
- Register and create a detailed service profile
- Upload bio, services offered, availability, and experience
- Upload a professional profile picture
- Categorize into domains like Legal, Marketing, Accounting, etc.

### 🧑‍🔧 For Clients
- Browse professionals by category and service
- Filter based on availability (Full-time, Part-time, Freelance)
- View detailed professional profiles
- Contact and request service

### 🛠️ Admin Panel 
- Approve or reject professional registrations

---

## 🧪 Technologies Used

| Layer        | Stack                                   |
| ------------ | ---------------------------------------- |
| **Frontend** | React, Tailwind CSS, Axios               |
| **Backend**  | Node.js, Express.js                      |
| **Database** | MongoDB with Mongoose                    |
| **Media**    | Cloudinary for profile uploads           |
| **Testing**  | Bruno for API testing                    |
| **Deployment** | (Coming Soon): Render / Vercel / Netlify + MongoDB Atlas |

---

## 📁 Project Structure

```bash
ServiceHub/
├── client/                  # Frontend React Application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
├── server/                  # Backend Express Server
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
├── uploads/                 # Cloudinary image handling (temp)
├── README.md
└── .env                     # Environment config files
