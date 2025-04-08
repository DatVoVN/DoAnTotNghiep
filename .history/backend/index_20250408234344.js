// ds4HnWFvN4WHoYDw
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
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("CONNECT");
});
app.listen(8000, () => {
  console.log(`Server running`);
});
