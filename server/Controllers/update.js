const User = require("../models/userModel");
const Professional = require("../models/registerForm")

// Update User Profile
export const profileUpdate =  async (req, res) => {
    const { fullName, bio, phone, profilePicture } = req.body;

    try {
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (fullName) user.fullName = fullName;
        if (bio) user.bio = bio;
        if (phone) user.phone = phone;
        if (profilePicture) user.profilePicture = profilePicture;

        await user.save();
        res.json({ message: "Profile updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};



// Update Professional Details
export const professioanlUpd =  async (req, res) => {
    const { servicesOffered, experience, location, availability, bio } = req.body;

    try {
        const professional = await Professional.findOne({ userId: req.user.userId });

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
export const updatePassword =  async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    try {
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Old password is incorrect" });
        }


        user.password = await bcrypt.hash(newPassword, 10);

        await user.save();
        res.json({ message: "Password updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

