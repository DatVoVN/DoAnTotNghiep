const authController = require("../controllers/authController");

const router = require("express").Router();
// DEVELOPER
router.post("/register", authController.registerDeveloper);
router.post("/login", authController.loginDeveloper);
//CANDIDATE
router.post("/candidate/register", authController.registerCandidate);
router.post("/candidate/login", authController.loginCandidate);
module.exports = router;
