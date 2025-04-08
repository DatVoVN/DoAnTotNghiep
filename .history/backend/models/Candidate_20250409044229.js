const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  fullName: { type: String, required: true }, // Họ và tên
  email: { type: String, required: true, unique: true }, // Email đăng nhập
  password: { type: String, required: true }, // Mật khẩu đã hash
  phone: { type: String }, // Số điện thoại (tùy chọn)
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  dateOfBirth: { type: Date }, // Ngày sinh

  address: { type: String }, // Địa chỉ (tùy chọn)
  cvUrl: { type: String }, // Đường dẫn đến file CV đã upload

  appliedJobs: [
    {
      jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
      appliedAt: { type: Date, default: Date.now },
    },
  ], // Danh sách công việc đã ứng tuyển

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
