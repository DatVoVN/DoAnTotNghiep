const express = require("express");
const router = express.Router();
const uploadCVMiddleware = require("../middleware/uploadCV");
const candidateController = require("../controllers/candidateController");
const verifyToken = require("../middleware/verifyToken");

// Route upload CV
router.post(
  "/upload-cv/:id",
  uploadCVMiddleware.single("cv"),
  candidateController.uploadCV
);
router.get("/me", verifyToken, candidateController.getMyInfo);
router.get("/:id", candidateController.getCandidateInfoByID);

module.exports = router;
