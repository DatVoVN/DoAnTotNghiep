const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("== [VERIFY TOKEN MIDDLEWARE] ==");
  console.log("Authorization Header:", authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Không có token hoặc định dạng Bearer sai.");
    return res.status(401).json({ message: "Không có token!" });
  }
  const token = authHeader.split(" ")[1];
  console.log("Token nhận được:", token);

  try {
    console.log("SECRET_KEY dùng để verify:", process.env.SECRET_KEY);

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("✅ Token hợp lệ! Payload giải mã:", decoded);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("❌ Token verify failed:", err.message);
    return res.status(403).json({ message: "Token không hợp lệ!" });
  }
};

module.exports = verifyToken;
