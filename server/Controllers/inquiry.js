const User = require("../models/user");
const Inquiry = require("../models/inquiry");
const transporter = require('../config/nodemailer')
const professionalSchema = require('../models/registerForm')

const showInquiry = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const prof = await professionalSchema.findOne({ userId: req.body.userId });

    const queries = await Inquiry.find({
      $or: [
        { clientId: req.body.userId },
        { professionalId: prof?._id }
      ]
    })
      .populate("clientId", "name email role picture")
      .populate({
        path: "professionalId",
        populate: { path: "userId", select: "name email role" }
      });

    // Restructure the response
    const formatted = queries.map(q => ({
      _id: q._id,
      inquiry: {
        message: q.message,
        serviceRequested: q.serviceRequested,
        status: q.status,
        createdAt: q.createdAt
      },
      client: q.clientId,
      professional: {
        ...q.professionalId.toObject(),
        user: q.professionalId.userId
      }
    }));

    res.status(200).json(formatted);
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
        
        const professional = await professionalSchema.findById(professionalId)
       
        const info = await Inquiry.create({
            clientId: userId,
            professionalId,
            serviceRequested,
            message
        });

        const mail = {
        from: process.env.SMTP_USER,
        to: professional.email,
        subject: "New ServiceHub Inquiry Received",
        html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #4CAF50;">You've received a new inquiry!</h2>
        <p><strong>Service Requested:</strong> ${serviceRequested}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f2f2f2; padding: 10px; border-left: 3px solid #4CAF50;">
            ${message}
        </p>
        <hr>
        <p>To view and update the status of this inquiry, please visit your dashboard:</p>
        <a href="${process.env.CLIENT_URL}/professional/inquiries" 
            style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
            View Inquiry
        </a>
        <p style="margin-top: 20px;">Thank you for using <strong>ServiceHub</strong>.</p>
        </div>
    `
    };
        transporter.sendMail(mail);

        res.status(201).json({ message: "Inquiry sent successfully", inquiry: info });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateInquiryStatus = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.inquiryId)
    
    inquiry.status = req.body.status

    await inquiry.save()

    res.status(200).json({message : "Status updated!"})
  } catch (error) {
    res.status(500).json({message : "Internal Server Error"})
  }
}


module.exports = { postInquiry, showInquiry, updateInquiryStatus};
