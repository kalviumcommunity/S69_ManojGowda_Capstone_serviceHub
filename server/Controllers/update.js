const User = require("../models/user");
const Professional = require("../models/registerForm");
const bcrypt = require("bcryptjs");

// Update User Profile
const profileUpdate = async (req, res) => {
    const { name, email, picture, userId,profession,phone } = req.body;
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (name) user.name = name;
        if(profession) user.profession = profession
        if(phone) user.phone = phone
        if (picture) user.picture = picture;

        await user.save();
        res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error}` });
    }
};

// Update Professional Details
const professionalUpd = async (req, res) => {
    const { servicesOffered, experience, location, availability, bio, userId } = req.body;

    try {
        const professional = await Professional.findOne({ userId : userId });

        if (!professional) {
            return res.status(404).json({ message: "Professional profile not found" });
        }

        if (servicesOffered) professional.servicesOffered = servicesOffered.split(",");
        if (experience) professional.experience = experience;
        if (location) professional.location = location;
        if (availability) professional.availability = availability;
        if (bio) professional.bio = bio;

        await professional.save();
        res.json({ message: "Professional details updated successfully", professional });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Update Password
const updatePassword = async (req, res) => {
    const { oldPassword, newPassword, userId } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Old password is incorrect" });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        await user.save();
        res.json({ message: "Password updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { profileUpdate, updatePassword, professionalUpd };
