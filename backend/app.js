const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorMiddleware = require("./middlewares/error");
const courseRoutes = require("./routes/courseRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

app.use("/api/v1/courses", courseRoutes);

module.exports = app;
