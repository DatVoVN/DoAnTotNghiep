const bcrypt = require("bcryptjs");
const Employer = require("../models/Employer"); // Model schema của nhà tuyển dụng

const authController = {
  // Đăng ký tài khoản nhà tuyển dụng
  registerDeveloper: async (req, res) => {
    try {
      const {
        fullName,
        phoneNumber,
        email,
        password,
        companyName,
        companyLocation,
      } = req.body;

      // Kiểm tra các field bắt buộc
      if (
        !fullName ||
        !phoneNumber ||
        !email ||
        !password ||
        !companyName ||
        !companyLocation
      ) {
        return res
          .status(400)
          .json({ message: "Vui lòng điền đầy đủ thông tin." });
      }

      // Kiểm tra trùng email hoặc số điện thoại
      const existingUser = await Employer.findOne({
        $or: [{ email }, { phoneNumber }],
      });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Email hoặc số điện thoại đã được sử dụng." });
      }

      // Hash mật khẩu
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Tạo tài khoản mới
      const newEmployer = new Employer({
        fullName,
        phoneNumber,
        email,
        password: hashedPassword,
        company: {
          name: companyName,
          location: companyLocation,
        },
      });

      // Lưu vào DB
      await newEmployer.save();

      res.status(201).json({ message: "Đăng ký thành công!" });
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      res.status(500).json({ message: "Lỗi server." });
    }
  },
};

module.exports = authController;
