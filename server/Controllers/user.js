const User = require("../models/user")

const user = async (req, res) => {
    try {

        const user = await User.findById(req.body.userId).select("name role email picture location phone profession");
        console.log(req.body.userId,user.role,user.picture);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = user;