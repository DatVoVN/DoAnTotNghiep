const mongoose = require("mongoose");
const CandidateSchema = new mongoose.Schema({
  avatarUrl: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  dateOfBirth: { type: Date },
  address: { type: String },
  cvUrl: { type: String },
  appliedJobs: [
    {
      jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
      appliedAt: { type: Date, default: Date.now },
    },
  ],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Candidate", CandidateSchema);
