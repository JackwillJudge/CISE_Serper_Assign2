// app.js

const express = require("express");
const connectDB = require("./config/db");
var cors = require('cors');

const articles = require('./routes/api/articles');
const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

const PORT = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
require("dotenv").config();


app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use('/api/articles', articles);