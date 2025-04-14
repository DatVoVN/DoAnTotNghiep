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
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin." });
      }

      // --- Logic mới cho OTP ---
      const existingCandidate = await Candidate.findOne({ email });

      // 1. Tạo OTP
      const otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          lowerCaseAlphabets: false,
          specialChars: false,
      });
      const otpExpires = Date.now() + 10 * 60 * 1000; // Hết hạn sau 10 phút

      let candidateToSave;

      if (existingCandidate) {
        // Nếu email đã tồn tại, kiểm tra xem đã verify chưa
        if (existingCandidate.isVerified) {
          return res.status(400).json({ message: "Email đã được đăng ký và xác thực." });
        } else {
          // Nếu chưa verify, cập nhật OTP mới và gửi lại mail
          console.log(`Email ${email} exists but not verified. Resending OTP.`);
          existingCandidate.password = await bcrypt.hash(password, 10); // Cập nhật lại password nếu user nhập mới
          existingCandidate.fullName = fullName; // Cập nhật tên nếu user nhập mới
          existingCandidate.otp = otp;
          existingCandidate.otpExpires = otpExpires;
          candidateToSave = existingCandidate;
        }
      } else {
        // Nếu email chưa tồn tại, tạo candidate mới
        const hashedPassword = await bcrypt.hash(password, 10);
        candidateToSave = new Candidate({
          fullName,
          email,
          password: hashedPassword,
          otp,
          otpExpires,
          isVerified: false, // Quan trọng
        });
      }

      // 2. Gửi Email OTP
      const emailSent = await sendOtpEmail(email, otp);
      if (!emailSent) {
          // Có thể không lưu user nếu gửi mail thất bại hoặc lưu để họ thử lại sau
          console.error("Failed to send OTP email, registration incomplete.");
          return res.status(500).json({ message: "Lỗi gửi email xác thực. Vui lòng thử lại." });
      }

      // 3. Lưu User (hoặc cập nhật) vào DB
      await candidateToSave.save();

      // 4. Trả về thông báo yêu cầu nhập OTP
      res.status(200).json({ // Trả về 200 thay vì 201 vì cần bước xác thực
        message: "Đăng ký gần thành công! Vui lòng kiểm tra email và nhập mã OTP để hoàn tất.",
        // Có thể trả về email để frontend dễ xử lý
        email: email,
      });

    } catch (error) {
      console.error("Lỗi khi đăng ký Candidate:", error);
       // Xử lý lỗi trùng email (nếu có race condition)
      if (error.code === 11000) {
         return res.status(400).json({ message: "Email đã được sử dụng." });
      }
      res.status(500).json({ message: "Lỗi server" });
    }
  },

  // --- Controller mới: Verify OTP ---
  verifyOtp: async (req, res) => {
      try {
          const { email, otp } = req.body;

          if (!email || !otp) {
              return res.status(400).json({ message: "Vui lòng cung cấp email và mã OTP." });
          }

          const candidate = await Candidate.findOne({ email });

          if (!candidate) {
              return res.status(404).json({ message: "Email không tồn tại hoặc chưa đăng ký." });
          }

          if (candidate.isVerified) {
              return res.status(400).json({ message: "Tài khoản này đã được xác thực." });
          }

          // Kiểm tra OTP và thời gian hết hạn
          if (candidate.otp !== otp || !candidate.otpExpires || candidate.otpExpires < Date.now()) {
              return res.status(400).json({ message: "Mã OTP không hợp lệ hoặc đã hết hạn." });
          }

          // Xác thực thành công
          candidate.isVerified = true;
          candidate.otp = undefined; // Xóa OTP sau khi xác thực
          candidate.otpExpires = undefined; // Xóa thời gian hết hạn
          await candidate.save();

          // --- Tùy chọn: Tạo token và đăng nhập luôn ---
          // const tokenPayload = { id: candidate._id, email: candidate.email, role: 'candidate' };
          // const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '7d' }); // Ví dụ hết hạn 7 ngày
          // res.status(200).json({
          //     message: "Xác thực tài khoản thành công!",
          //     token: token, // Trả về token
          //     candidate: { id: candidate._id, fullName: candidate.fullName, email: candidate.email } // Trả về thông tin user
          // });

          // --- Hoặc chỉ trả về thông báo thành công ---
          res.status(200).json({ message: "Xác thực tài khoản thành công! Bạn có thể đăng nhập." });


      } catch (error) {
          console.error("Lỗi khi xác thực OTP:", error);
          res.status(500).json({ message: "Lỗi server" });
      }
    }

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
