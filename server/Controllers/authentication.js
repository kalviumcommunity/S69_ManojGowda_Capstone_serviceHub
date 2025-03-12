const User = require("../models/user")
const bcrypt = require("bcryptjs");
export const register =  async (req, res) => {
    try {
        const { name, email, role, password } = req.body;

        if (!name || !email || !role || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        console.log(user);
        res.status(201).json({ message: "User signed up successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const logIn =  async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(200).json({ message: `No user found with email ${email}` });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        return res.status(200).json({ message: "User logged in" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};