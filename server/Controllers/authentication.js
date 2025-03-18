const User = require("../models/user")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const transporter = require('../config/nodemailer')
require('dotenv').config()

const register =  async (req, res) => {
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

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : '1h'});

        res.cookie('token', token, {
            httpOnly : true,
            secure : process.env.NODE_ENV === 'production',
            sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge : 24 * 60 * 60 * 1000
        });

        const mail = {
            from: process.env.SMTP_USER,
            to: email,
            subject: "Welcome to ServiceHub",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #e5e7eb; background-color: #111827; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto;">
                    <h2 style="color:rgb(255, 255, 253); text-align: center;">Welcome to serviceHub!</h2>
        
                    <p class="text-gray-300">Dear <strong>${name}</strong>,</p>
        
                    <p class="text-gray-300">
                        We are excited to have you on board! <strong>serviceHub</strong> is designed to streamline your inquiries, making it easy to send, track, and manage requests effortlessly.
                    </p>
        
                    <p class="text-gray-300"><strong>What you can do with serviceHub:</strong></p>
                    <ul style="list-style-type: none; padding: 0;">
                        <li style="margin: 5px 0;">✅ Submit inquiries seamlessly</li>
                        <li style="margin: 5px 0;">✅ Track the status of your requests in real time</li>
                    </ul>
        
                    <p class="text-gray-300">
                        Get started by logging into your account and exploring the dashboard. If you have any questions, our support team is here to help!
                    </p>
        
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="YOUR_LOGIN_LINK_HERE" 
                           style="display: inline-block; background-color: #3b82f6; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                            Login to ServiceHub
                        </a>
                    </div>
        
                    <p class="text-gray-300" style="margin-top: 20px;">We are glad to have you with us!</p>
        
                    <p class="text-gray-400">Best regards,</p>
                    <p class="text-gray-400"><strong>The ServiceHub Team</strong></p>
                </div>
            `
        };

        await transporter.sendMail(mail);
        

        console.log(user);
        res.status(201).json({ message: "User signed up successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const logIn =  async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.json({message : "email and password are required"})
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(200).json({ message: `No user found with email ${email}` });
        }
        
        //Authenticating user based on the hased password stored in the dataBase

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : '1h'});

        res.cookie('token', token, {
            httpOnly : true,
            secure : process.env.NODE_ENV === 'production',
            sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge : 24 * 60 * 60 * 1000
        })

        return res.status(200).json({ message: "User logged in" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const logout = async(req,res) => {
   try{
    res.clearCookie('token', {
        httpOnly : true,
        secure : process.env.NODE_ENV === 'production',
        sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict' 
    })

    return res.json({message : "logged out"});

   }catch(err){
      res.json({message : `${err}`})
   }
}

module.exports = {register,logIn,logout};