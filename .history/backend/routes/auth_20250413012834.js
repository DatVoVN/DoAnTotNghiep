const authController = require("../controllers/authController");

const router = require("express").Router();
// DEVELOPER
router.post("/register", authController.registerDeveloper);
router.post("/login", authController.loginDeveloper);
//CANDIDATE
router.post("/candidate/register", authController.registerCandidate);
router.post("/candidate/login", authController.loginCandidate);
router.post("/candidate/verify-otp", authController.verifyOtp); // Xác thực OTP
router.post("/candidate/resend-otp", authController.resendOtp); // Gửi lại OTP
module.exports = router;
