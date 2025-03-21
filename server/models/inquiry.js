
const mongoose = require('mongoose')
const inquirySchema = new mongoose.Schema({
    //Relation between client and professional schema
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    professionalId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    serviceRequested: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
    createdAt: { type: Date, default: Date.now },
  });

module.exports = mongoose.model("Inquiry", inquirySchema);