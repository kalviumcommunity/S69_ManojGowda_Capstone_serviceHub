const User = require("../models/user");
const Inquiry = require("../models/inquiry");

const showInquiry = async (req, res) => {//issuse
    try {
        const user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let queries;
        if (user.role === "client") {
            queries = await Inquiry.find({ clientId: req.body.userId })
                .populate("professionalId", "name email role");
        } else if (user.role === "professional") {
            queries = await Inquiry.find({ professionalId: req.body.userId })
                .populate("clientId", "name email role");
        }

        res.status(200).json(queries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const postInquiry = async (req, res) => {
    try {
        const { userId, professionalId, serviceRequested, message } = req.body;

        
        if (!userId || !professionalId || !message || !serviceRequested) {
            return res.status(400).json({ message: "All fields are required!" });
        }

       
        const info = await Inquiry.create({
            clientId: userId,
            professionalId,
            serviceRequested,
            message
        });

        console.log(info);
        res.status(201).json({ message: "Inquiry sent successfully", inquiry: info });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = { postInquiry, showInquiry };
