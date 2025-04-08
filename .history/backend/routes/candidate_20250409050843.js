const express = require("express");
const router = express.Router();
const uploadCVMiddleware = require("../middleware/uploadCV");
const candidateController = require("../controllers/candidateController");

// Route upload CV
router.post(
  "/upload-cv/:id",
  uploadCVMiddleware.single("cv"),
  candidateController.uploadCV
);

module.exports = router;
