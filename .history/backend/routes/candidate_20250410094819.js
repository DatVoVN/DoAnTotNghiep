const express = require("express");
const router = express.Router();
const uploadCVMiddleware = require("../middleware/uploadCV");
const candidateController = require("../controllers/candidateController");
const verifyToken = require("../middleware/verifyToken");

// Route upload CV

router.get("/me", verifyToken, candidateController.getMyInfo);
router.get("/:id", candidateController.getCandidateInfoByID);
router.post(
  "/upload-cv/:id",
  uploadCVMiddleware.single("cv"),
  candidateController.uploadCV
);
router.put(
  "/update-cv/:id",
  uploadCVMiddleware.single("cv"),
  candidateController.updateCV
);
module.exports = router;
