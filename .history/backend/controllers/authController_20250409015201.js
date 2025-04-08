const bcrypt = require("bcryptjs");
const Developer = require("../models/Developer");
const jwt = require("jsonwebtoken");

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
      const existingUser = await Developer.findOne({
        $or: [{ email }, { phoneNumber }],
      });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Email hoặc số điện thoại đã được sử dụng." });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newEmployer = new Developer({
        fullName,
        phoneNumber,
        email,
        password: hashedPassword,
        company: {
          name: companyName,
          location: companyLocation,
        },
      });
      await newEmployer.save();
      res.status(201).json({ message: "Đăng ký thành công!" });
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      res.status(500).json({ message: "Lỗi server." });
    }
  },
  loginDeveloper: async (req, res) => {
    try {
      const { email, password } = req.body;
      const employer = await Developer.findOne({ email });
      if (!employer) {
        return res.status(400).json({ message: "Email không tồn tại!" });
      }
      const isMatch = await bcrypt.compare(password, employer.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Mật khẩu không đúng!" });
      }
      const token = jwt.sign(
        { id: employer._id, email: employer.email },
        "SECRET_KEY",
        { expiresIn: "7d" }
      );
      res.status(200).json({
        message: "Đăng nhập thành công!",
        token,
        employer: {
          id: employer._id,
          fullName: employer.fullName,
          email: employer.email,
          company: employer.company,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Lỗi server", error: error.message });
    }
  },
};

module.exports = authController;
