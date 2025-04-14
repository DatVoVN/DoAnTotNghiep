// models/Candidate.js
const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  }, // Thêm lowercase, trim
  password: { type: String, required: true },
  phone: { type: String },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  dateOfBirth: { type: Date },
  address: { type: String },
  avatarUrl: { type: String }, // Đã thêm ở bước trước
  cvUrl: { type: String },
  appliedJobs: [
    /* ... */
  ],

  // --- Thêm các trường cho xác thực OTP ---
  otp: { type: String },
  otpExpires: { type: Date },
  isVerified: { type: Boolean, default: false }, // Mặc định là chưa xác thực

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware pre-save để tự động cập nhật `updatedAt` (tùy chọn)
CandidateSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Candidate", CandidateSchema);
