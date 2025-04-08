const User = require("../models/user")
const transporter = require('../config/nodemailer')

require('dotenv').config()

const sendContactIssue = async(req, res) => {
    try{
        const {name, email, message} = req.body;

        if(!name || !email || !message){
            return res.status(400).json({message : "All fields are required"})
        }

        const admin = await User.findOne({role : "admin"})

        const mail = {
            from: process.env.SMTP_USER, // platform email
            to: admin.email, // your admin email
            subject: `New Contact Message from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #e5e7eb; background-color: #111827; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto;">
                <h2 style="color: #ffffff; text-align: center;">📩 New Message from Contact Form</h2>
          
                <p><strong style="color:#fff;">Name:</strong> ${name}</p>
                <p><strong style="color:#fff;">Email:</strong> ${email}</p>
          
                <p style="margin-top: 10px;"><strong style="color:#fff;">Message:</strong></p>
                <p style="color: #d1d5db; background-color: #1f2937; padding: 15px; border-radius: 8px;">
                  ${message}
                </p>
          
                <p style="margin-top: 30px; color: #9ca3af;">You received this message from the contact form on your ServiceHub platform.</p>
              </div>
            `
          };

          await transporter.sendMail(mail);
          res.status(200).json({message : "recieved"})

    }catch(err){
        res.status(500).json({message : "Internal server Error"})
    }
}

module.exports = sendContactIssue;