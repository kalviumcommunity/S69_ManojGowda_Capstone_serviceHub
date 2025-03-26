const User = require("../models/user");

const deleteUser = async (req, res) => {
    try {
        const {userId} = req.body; 

        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User account deleted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Internal Server Error : ${error.message }`});
    }
};

module.exports = deleteUser;
