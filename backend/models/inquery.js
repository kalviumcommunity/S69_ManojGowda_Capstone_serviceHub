const inquirySchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    professionalId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    serviceRequested: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
    createdAt: { type: Date, default: Date.now },
  });