const Professional = require("../models/registerForm");
const User = require("../models/user");

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
        const { userId, fullName, email, profession, experience, location, bio, servicesOffered, availability, phone ,category} = req.body;

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
            category
        });

        console.log(register);
        res.status(201).json({ message: "Professional registration successful!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { professionalRegister, professional, Professionals };
