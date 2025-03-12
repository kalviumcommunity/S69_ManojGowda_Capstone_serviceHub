const User = require("../models/user");
const Inquery = require("../models/inquiry")
export const showInquiry = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let queries;
        if (user.role === "client") {
            queries = await Inquery.find({ clientId: req.params.id })
                .populate("professionalId", "name email role");
        } else if (user.role === "professional") {
            queries = await Inquery.find({ professionalId: req.params.id })
                .populate("clientId", "name email role");
        }

        res.status(200).json(queries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const postInquiry =  async (req, res) => {
    try {
        const { serviceRequested, message } = req.body;
        if (!message || !serviceRequested) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const info = await Inquery.create({
            serviceRequested,
            message
        });

        console.log(info);
        res.status(201).json({ message: "Inquiry sent successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};