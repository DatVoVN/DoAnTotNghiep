const Candidate = require("../models/Candidate");

// Controller xử lý upload CV
const uploadCV = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Không tìm thấy ứng viên." });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Vui lòng chọn file PDF." });
    }

    candidate.cvUrl = `/uploads/cv/${req.file.filename}`;
    await candidate.save();

    res.status(200).json({
      message: "Tải CV thành công!",
      cvUrl: candidate.cvUrl,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

module.exports = {
  uploadCV,
};
