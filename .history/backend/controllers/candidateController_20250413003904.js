const Candidate = require("../models/Candidate");
const path = require("path");
const fs = require("fs");

// Controller xử lý upload CV
const uploadCV = async (req, res) => {
  try {
    const candidateId = req.params.id || req.user.id;
    if (!candidateId) {
      return res.status(400).json({ message: "Thiếu thông tin ứng viên." });
    }
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: "Không tìm thấy ứng viên." });
    }
    if (!req.file) {
      return res.status(400).json({ message: "Vui lòng chọn file PDF." });
    }
    if (candidate.cvUrl) {
      const oldPath = path.join(__dirname, "..", candidate.cvUrl);
      if (
        fs.existsSync(oldPath) &&
        candidate.cvUrl.startsWith("/uploads/cv/")
      ) {
        try {
          fs.unlinkSync(oldPath);
          console.log(`Deleted old CV: ${oldPath}`);
        } catch (unlinkErr) {
          console.error(`Error deleting old CV ${oldPath}:`, unlinkErr);
        }
      }
    }
    candidate.cvUrl = `/uploads/cv/${req.file.filename}`;
    await candidate.save();
    res.status(200).json({
      message: "Tải CV thành công!",
      cvUrl: candidate.cvUrl,
    });
  } catch (err) {
    console.error("Error uploading CV:", err);
    if (req.file && req.file.path) {
      try {
        fs.unlinkSync(req.file.path);
        console.log(`Deleted uploaded file due to error: ${req.file.path}`);
      } catch (cleanupErr) {
        console.error(
          `Error cleaning up uploaded file ${req.file.path}:`,
          cleanupErr
        );
      }
    }
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// Controller cập nhật CV (chỉ cho user tự cập nhật)
const updateCV = async (req, res) => {
  try {
    const userId = req.user.id;
    const candidate = await Candidate.findById(userId);
    if (!candidate) {
      return res.status(404).json({ message: "Không tìm thấy ứng viên." });
    }
    if (!req.file) {
      return res.status(400).json({ message: "Vui lòng chọn file PDF mới." });
    }
    if (candidate.cvUrl) {
      const oldPath = path.join(__dirname, "..", candidate.cvUrl);
      if (
        fs.existsSync(oldPath) &&
        candidate.cvUrl.startsWith("/uploads/cv/")
      ) {
        try {
          fs.unlinkSync(oldPath);
          console.log(`Deleted old CV for update: ${oldPath}`);
        } catch (unlinkErr) {
          console.error(
            `Error deleting old CV ${oldPath} during update:`,
            unlinkErr
          );
        }
      }
    }
    candidate.cvUrl = `/uploads/cv/${req.file.filename}`;
    await candidate.save();
    res.status(200).json({
      message: "Cập nhật CV thành công!",
      cvUrl: candidate.cvUrl,
    });
  } catch (err) {
    console.error("Error updating CV:", err);
    if (req.file && req.file.path) {
      try {
        fs.unlinkSync(req.file.path);
        console.log(
          `Deleted newly uploaded file due to error: ${req.file.path}`
        );
      } catch (cleanupErr) {
        console.error(
          `Error cleaning up newly uploaded file ${req.file.path}:`,
          cleanupErr
        );
      }
    }
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// Controller lấy thông tin ứng viên theo ID
const getCandidateInfoByID = async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findById(id).select("-password");
    if (!candidate) {
      return res.status(404).json({ message: "Không tìm thấy ứng viên." });
    }
    res.status(200).json({
      message: "Lấy thông tin ứng viên thành công.",
      data: candidate,
    });
  } catch (err) {
    console.error("Error getting candidate by ID:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// Controller lấy thông tin cá nhân của ứng viên đang đăng nhập
const getMyInfo = async (req, res) => {
  try {
    const userId = req.user.id;
    const candidate = await Candidate.findById(userId).select("-password");
    if (!candidate) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy thông tin người dùng." });
    }
    res.status(200).json({
      message: "Lấy thông tin cá nhân thành công.",
      data: candidate,
    });
  } catch (err) {
    console.error("Error getting my info:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// Controller cập nhật thông tin cá nhân
const updateMyInfo = async (req, res) => {
  try {
    const userId = req.user.id;
    const candidate = await Candidate.findById(userId);

    if (!candidate) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy thông tin người dùng." });
    }

    // Lấy các trường được phép cập nhật từ req.body dựa trên Schema
    const {
      fullName,
      phone,
      gender,
      dateOfBirth,
      address,
      avatarUrl,
      // Thêm các trường tùy chỉnh khác nếu có trong schema và muốn cho phép cập nhật
    } = req.body;

    // Danh sách các trường được phép cập nhật
    const allowedUpdates = {};
    if (fullName !== undefined) allowedUpdates.fullName = fullName;
    if (phone !== undefined) allowedUpdates.phone = phone;
    if (gender !== undefined) allowedUpdates.gender = gender;
    if (avatarUrl !== undefined) allowedUpdates.avatarUrl = avatarUrl;
    if (dateOfBirth !== undefined) {
      // Chuyển đổi dateOfBirth thành đối tượng Date nếu nó là chuỗi
      const dob = new Date(dateOfBirth);
      // Kiểm tra xem có phải là Date hợp lệ không trước khi gán
      if (!isNaN(dob.getTime())) {
        allowedUpdates.dateOfBirth = dob;
      } else {
        // Bỏ qua nếu không phải Date hợp lệ hoặc trả lỗi tùy ý
        console.warn(`Invalid dateOfBirth format received: ${dateOfBirth}`);
        // return res.status(400).json({ message: "Định dạng ngày sinh không hợp lệ." });
      }
    }
    if (address !== undefined) allowedUpdates.address = address;

    // Kiểm tra xem có dữ liệu nào được gửi lên để cập nhật không
    if (Object.keys(allowedUpdates).length === 0) {
      return res
        .status(400)
        .json({ message: "Không có thông tin nào được cung cấp để cập nhật." });
    }

    // Cập nhật các trường đã xác định vào đối tượng candidate
    Object.assign(candidate, allowedUpdates);

    // Đặt lại trường updatedAt trước khi lưu
    candidate.updatedAt = Date.now();

    // Lưu các thay đổi vào database
    const updatedCandidate = await candidate.save();

    // Không trả về password hash trong response
    updatedCandidate.password = undefined;

    res.status(200).json({
      message: "Cập nhật thông tin cá nhân thành công.",
      data: updatedCandidate,
    });
  } catch (err) {
    console.error("Error updating my info:", err);
    console.error(">>> CONTROLLER CATCH BLOCK - ERROR NAME:", err.name); // Log tên lỗi
    console.error(">>> CONTROLLER CATCH BLOCK - ERROR MESSAGE:", err.message); // Log message lỗi
    console.error(">>> CONTROLLER CATCH BLOCK - ERROR STACK:", err.stack); // Log stack trace chi
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((el) => ({
        field: el.path,
        message: el.message,
      }));
      return res
        .status(400)
        .json({ message: "Dữ liệu không hợp lệ.", errors: errors });
    }
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

module.exports = {
  uploadCV,
  getCandidateInfoByID,
  getMyInfo,
  updateCV,
  updateMyInfo,
};
