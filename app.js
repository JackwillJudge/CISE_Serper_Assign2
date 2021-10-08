// app.js
require("dotenv").config({ path:"./config.env" });
const path = require('path');
const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
require("dotenv").config();

// routes
const articles = require("./routes/api/articles");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("API running"));

// use Routes
app.use("/api/articles", articles);

if(process.env.NODE_ENV === "development") {
    app.use(express.static(path.join(__dirname, '/seper/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'seper','build', 'index.html'));
    })
} else{
    app.get("/", (req, res) => res.send("Api running"));
}

const port = process.env.PORT || 8082;

app.listen(port, () =>
 console.log(`Server running on port ${port}`));

