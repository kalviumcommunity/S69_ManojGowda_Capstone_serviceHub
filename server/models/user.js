const mongoose = require("mongoose");
require("dotenv").config({path: './config/.env'})

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  picture: {type : String, default: process.env.DEFAULT_PROFILE},
  location:String,
  phone:Number,
  profession:String,
  role: { type: String, enum: ["client", "professional","admin"], required: true, default: "client" }, 
  verifyOtp : {type : String, default:""},
  verifyOtpExpireAt : {type : Number, default:0},
  resetOtp : {type : String, default:""},
  resetOtpExpireAt : {type : Number, default:0},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);