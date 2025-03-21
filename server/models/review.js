const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
  //Relation between client and professional schema
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    professionalId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String },
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Review", ReviewSchema);