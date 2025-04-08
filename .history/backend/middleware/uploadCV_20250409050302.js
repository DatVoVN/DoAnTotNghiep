const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Tạo thư mục nếu chưa tồn tại
const cvDirectory = path.join(__dirname, "../uploads/cv");
if (!fs.existsSync(cvDirectory)) {
  fs.mkdirSync(cvDirectory, { recursive: true });
}

// Cấu hình lưu file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, cvDirectory);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "cv-" + uniqueSuffix + path.extname(file.originalname));
  },
});

// Chỉ chấp nhận file PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Chỉ chấp nhận file PDF!"), false);
  }
};

const uploadCV = multer({ storage, fileFilter });

module.exports = uploadCV;
