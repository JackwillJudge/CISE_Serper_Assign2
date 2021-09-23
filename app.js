// app.js

const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

const PORT = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
require("dotenv").config();
