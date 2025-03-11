const Professional = require("../models/registerForm")

export const Professionals =  async (req, res) => {
    try {
        const professionals = await Professional.find({ profession: req.params.profession });

        if (professionals.length === 0) {
            return res.status(404).json({ message: `No users with the role: ${req.params.profession}` });
        }
        res.status(200).json(professionals);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const Professional =  async (req, res) => {
    try {
        const professional = await Professional.findOne({ _id: req.params.id, role: "professional" });

        if (!professional) {
            return res.status(404).json({ message: `No professional found with this ${req.params.id}` });
        }
        res.status(200).json(professional);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const professionalRegister=  async (req, res) => {
    try {
        const { fullName, email, profession, experience, location, bio, servicesOffered, availability } = req.body;

        if (!fullName || !email || !profession || !experience || !location || !bio || !servicesOffered || !availability) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const register = await Professional.create({
            fullName,
            email,
            profession,
            experience,
            location,
            bio,
            servicesOffered,
            availability
        });

        console.log(register);
        res.status(201).json({ message: "Registration form received!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};