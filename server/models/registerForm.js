const mongoose = require('mongoose')
require("dotenv").config({path: './config/.env'})

const professionalSchema = new mongoose.Schema({
    // realtion between userSchema and professionalRegisterSchema
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    profession: { type: String, required: true}, 
    experience: { type: Number, required: true }, 
    location: { type: String, required: true }, 
    bio: { type: String }, 
    profilePicture: { type: String , default: process.env.DEFAULT_PROFILE},
    servicesOffered: [{ type: String }], 
    availability: { type: String, enum: ["Full-time", "Part-time", "Freelance"], required: true },
    isApproved: { type: Boolean, default: false }, 
    walletBalance: { type: Number, default: 100 }, 
    category :{type : String, required:true},
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Professional", professionalSchema);