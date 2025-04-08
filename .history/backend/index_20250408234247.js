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
mongoose.connect(
  "mongodb+srv://dat246642:ds4HnWFvN4WHoYDw@cluster0.7eppsah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  () => {
    console.log("CONNECT");
  }
);
app.listen(8000, () => {
  console.log(`Server running`);
});
