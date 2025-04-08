const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
app.listen(8000, () => {
  console.log(`Server running`);
});
