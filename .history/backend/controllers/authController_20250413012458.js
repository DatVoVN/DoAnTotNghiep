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
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Vui lòng nhập đầy đủ thông tin." });
    }

    const normalizedEmail = email.toLowerCase().trim(); // Chuẩn hóa email

    try {
      const existingCandidate = await Candidate.findOne({
        email: normalizedEmail,
      });

      // 1. Tạo OTP và thời gian hết hạn
      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
        digits: true, // Chỉ dùng số
      });
      const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // Hết hạn sau 10 phút (Date object)

      let candidateToProcess;
      let isNewRegistration = false; // Cờ để biết là đăng ký mới hay chỉ cập nhật OTP

      if (existingCandidate) {
        if (existingCandidate.isVerified) {
          return res
            .status(400)
            .json({ message: "Email đã được đăng ký và xác thực." });
        } else {
          // Email tồn tại nhưng chưa xác thực -> Cập nhật thông tin và OTP mới
          console.log(`Updating OTP for unverified email: ${normalizedEmail}`);
          const hashedPassword = await bcrypt.hash(password, 10); // Hash lại password mới nhất
          existingCandidate.password = hashedPassword;
          existingCandidate.fullName = fullName; // Cập nhật cả tên nếu user thay đổi
          existingCandidate.otp = otp;
          existingCandidate.otpExpires = otpExpires;
          candidateToProcess = existingCandidate;
        }
      } else {
        // Email chưa tồn tại -> Tạo ứng viên mới
        const hashedPassword = await bcrypt.hash(password, 10);
        candidateToProcess = new Candidate({
          fullName,
          email: normalizedEmail,
          password: hashedPassword,
          otp,
          otpExpires,
          isVerified: false,
        });
        isNewRegistration = true;
      }

      // 2. Gửi Email OTP (Thực hiện trước khi lưu vào DB)
      const emailSent = await sendOtpEmail(normalizedEmail, otp);
      if (!emailSent) {
        console.error(`Failed to send OTP email to ${normalizedEmail}.`);
        return res
          .status(500)
          .json({
            message: "Lỗi hệ thống khi gửi email xác thực. Vui lòng thử lại.",
          });
      }

      // 3. Lưu ứng viên vào DB (sau khi gửi mail thành công)
      await candidateToProcess.save();
      console.log(`OTP saved/updated for ${normalizedEmail}`);

      // 4. Phản hồi thành công, yêu cầu nhập OTP
      res.status(200).json({
        message:
          "Mã OTP đã được gửi đến email của bạn. Vui lòng kiểm tra và nhập mã để hoàn tất đăng ký.",
        email: normalizedEmail, // Trả về email đã chuẩn hóa
      });
    } catch (error) {
      console.error("Lỗi khi đăng ký Candidate:", error);
      if (error.code === 11000) {
        // Lỗi trùng email từ DB (race condition)
        return res.status(400).json({ message: "Email này đã được sử dụng." });
      }
      res.status(500).json({ message: "Lỗi server trong quá trình đăng ký." });
    }
  },

  // === GỬI LẠI OTP ===
  resendOtp: async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Vui lòng cung cấp email." });
    }

    const normalizedEmail = email.toLowerCase().trim();

    try {
      const candidate = await Candidate.findOne({ email: normalizedEmail });

      // Không tiết lộ email có tồn tại hay không cho các request không thành công
      if (!candidate || candidate.isVerified) {
        // Nếu không tìm thấy HOẶC đã xác thực -> trả về thông báo chung chung
        console.log(
          `Resend OTP request for non-existent or verified email: ${normalizedEmail}`
        );
        return res
          .status(400)
          .json({
            message:
              "Nếu email của bạn đã được đăng ký và chưa xác thực, mã OTP sẽ được gửi lại.",
          });
      }

      // Chỉ xử lý khi tài khoản tồn tại và CHƯA xác thực
      // Tạo OTP mới
      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
        digits: true,
      });
      const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // Hết hạn sau 10 phút

      // Cập nhật candidate trong bộ nhớ
      candidate.otp = otp;
      candidate.otpExpires = otpExpires;

      // Gửi Email OTP mới (thực hiện trước khi lưu)
      const emailSent = await sendOtpEmail(normalizedEmail, otp);
      if (!emailSent) {
        console.error(`Failed to resend OTP email to ${normalizedEmail}.`);
        // Không nên lưu OTP mới nếu không gửi được mail
        return res
          .status(500)
          .json({
            message:
              "Lỗi hệ thống khi gửi lại email xác thực. Vui lòng thử lại.",
          });
      }

      // Lưu OTP mới vào DB (sau khi gửi mail thành công)
      await candidate.save();
      console.log(`Resent OTP saved for ${normalizedEmail}`);

      res
        .status(200)
        .json({ message: "Mã OTP mới đã được gửi lại đến email của bạn." });
    } catch (error) {
      console.error("Lỗi khi gửi lại OTP:", error);
      res.status(500).json({ message: "Lỗi server khi gửi lại OTP." });
    }
  },

  // === VERIFY OTP (đã có, không đổi) ===
  verifyOtp: async (req, res) => {
    /* ... */
  },

  // === LOGIN CANDIDATE (đã có, không đổi logic OTP trong này nữa) ===
  loginCandidate: async (req, res) => {
    try {
      const { email, password } = req.body;
      const normalizedEmail = email.toLowerCase().trim();
      const candidate = await Candidate.findOne({ email: normalizedEmail });

      if (!candidate) {
        return res
          .status(400)
          .json({ message: "Email hoặc mật khẩu không đúng." }); // Thông báo chung chung
      }

      // Quan trọng: Kiểm tra đã xác thực chưa
      if (!candidate.isVerified) {
        return res.status(403).json({
          message:
            "Tài khoản chưa được xác thực. Vui lòng kiểm tra email để lấy mã OTP hoặc yêu cầu gửi lại.",
          // Có thể thêm cờ để frontend biết cần hiển thị form OTP
          // verificationRequired: true,
          // email: normalizedEmail
        });
      }

      const isMatch = await bcrypt.compare(password, candidate.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Email hoặc mật khẩu không đúng." }); // Thông báo chung chung
      }

      // Tạo token nếu mọi thứ hợp lệ
      const token = jwt.sign(
        { id: candidate._id, email: candidate.email, role: "candidate" },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.status(200).json({
        message: "Đăng nhập thành công!",
        token,
        candidate: {
          /* ... thông tin candidate ... */
        },
      });
    } catch (error) {
      console.error("Lỗi đăng nhập Candidate:", error);
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
