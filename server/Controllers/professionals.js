const Professional = require("../models/registerForm");
const User = require("../models/user");
require('dotenv').config({ path: './config/.env' })
const Professionals = async (req, res) => {
    try {
        const { category } = req.query; 

        if (!category) {
            return res.status(400).json({ message: "Category is required" });
        }

        const professionals = await Professional.find({ category, isApproved: true }).select("fullName bio profilePicture");

        if (professionals.length === 0) {
            return res.status(404).json({ message: `No users found for category: ${category}` });
        }

        res.status(200).json(professionals);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const sendPro = async (req, res) => {
    try {
        const {userId} = req.body
        
        if(userId !== process.env.ADMIN_ID){
            return res.status(404).json({message : "Only Admins are allowed "})
        }
        const professionals = await Professional.find({isApproved: false }).select("fullName _id email bio profilePicture location profession phone servicesOffered rating");

        if (professionals.length === 0) {
            return res.status(404).json({ message: `No new profile listed` });
        }

        res.status(200).json(professionals);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const approvePro = async (req, res) => {
    try {
      const { userId, professionalId } = req.body;
  
      // Check if the request is made by an admin
      if (userId !== process.env.ADMIN_ID) {
        return res.status(403).json({ message: "Only Admins are allowed" });
      }
  
      // Update the professional's approval status
      const updatedPro = await Professional.findByIdAndUpdate(
        professionalId,
        { isApproved: true },
        { new: true }
      );
  
      if (!updatedPro) {
        return res.status(404).json({ message: "Professional not found" });
      }
  
      return res.status(200).json({
        message: "Professional approved successfully",
        professional: updatedPro,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

const professional = async (req, res) => {
    try {
        const professional = await Professional.findOne({ 
            userId: req.body.userId});

        if (!professional) {
            return res.status(404).json({ message: `No professional found with this ${req.body.userId}` });
        }
        res.status(200).json(professional);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const professionalRegister = async (req, res) => {
    try {
        const { userId, fullName, email, profession, experience, location, bio, servicesOffered, availability, phone ,category, profilePicture} = req.body;

        if (!userId || !fullName || !email || !profession || !experience || !location || !bio || !servicesOffered || !availability || !phone || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found. Please register first." });
        }

        const existingProfessional = await Professional.findOne({ userId: user._id });
        if (existingProfessional) {
            return res.status(400).json({ message: "User is already registered as a professional." });
        }
        const servicesArray = servicesOffered.split(',').map(service => service.trim());

        const register = await Professional.create({
            userId: user._id,
            fullName,
            email,
            phone,
            profession,
            experience,
            location,
            bio,
            servicesOffered: servicesArray,
            availability,
            category,
            profilePicture
        });

        console.log(register);
        res.status(201).json({ message: "Professional registration successful!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { professionalRegister, professional, Professionals ,sendPro, approvePro};
