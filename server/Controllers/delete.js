const User = require("../models/user") 

 const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        // Ensure the logged-in user is the same as the one being deleted
        if (req.body.id !== userId && req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized to delete this account" });
        }

        const deletedUser = await User.findByIdAndDelete(userId);
        
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User account deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

module.exports = deleteUser