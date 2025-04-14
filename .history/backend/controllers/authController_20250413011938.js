const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Developer = require("../models/Developer");
const Candidate = require("../models/Candidate");

const authController = {
  // === ĐĂNG KÝ DEVELOPER ===
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

      const hashedPassword = await bcrypt.hash(password, 10);
      const newDeveloper = new Developer({
        fullName,
        phoneNumber,
        email,
        password: hashedPassword,
        company: {
          name: companyName,
          location: companyLocation,
        },
      });

      await newDeveloper.save();
      res.status(201).json({ message: "Đăng ký thành công!" });
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      res.status(500).json({ message: "Lỗi server." });
    }
  },

  // === ĐĂNG NHẬP DEVELOPER ===
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
        { id: employer._id, email: employer.email, role: "developer" },
        "SECRET_KEY",
        { expiresIn: "7d" }
      );

      res.status(200).json({
        message: "Đăng nhập thành công!",
        token,
        developer: {
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

  // === ĐĂNG KÝ CANDIDATE ===
  registerCandidate: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;

      if (!fullName || !email || !password) {
        return res
          .status(400)
          .json({ message: "Vui lòng nhập đầy đủ thông tin." });
      }

      const existingCandidate = await Candidate.findOne({ email });
      if (existingCandidate) {
        return res.status(400).json({ message: "Email đã được sử dụng." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newCandidate = new Candidate({
        fullName,
        email,
        password: hashedPassword,
      });

      await newCandidate.save();
      res.status(201).json({ message: "Đăng ký thành công!" });
    } catch (error) {
      console.error("Lỗi khi đăng ký Candidate:", error);
      res.status(500).json({ message: "Lỗi server" });
    }
  },

  // === ĐĂNG NHẬP CANDIDATE ===
  loginCandidate: async (req, res) => {
    try {
      const { email, password } = req.body;
      const candidate = await Candidate.findOne({ email });

      if (!candidate) {
        return res.status(400).json({ message: "Email không tồn tại!" });
      }

      const isMatch = await bcrypt.compare(password, candidate.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Mật khẩu không đúng!" });
      }

      const token = jwt.sign(
        { id: candidate._id, email: candidate.email, role: "candidate" },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
      );

      res.status(200).json({
        message: "Đăng nhập thành công!",
        token,
        candidate: {
          id: candidate._id,
          fullName: candidate.fullName,
          email: candidate.email,
        },
      });
    } catch (error) {
      console.error("Lỗi đăng nhập Candidate:", error);
      res.status(500).json({ message: "Lỗi server" });
    }
  },
};

module.exports = authController;
