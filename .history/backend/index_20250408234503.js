const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(cookieParser());
app.use(express.json());
dotenv.config();

// CONNECT MONGODB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

connectDB();

// START SERVER
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
