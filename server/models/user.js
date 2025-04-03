const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  picture: String,
  location:String,
  phone:Number,
  profession:String,
  role: { type: String, enum: ["client", "professional","admin"], required: true, default: "client" }, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);