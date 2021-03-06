// models/Approved.js

const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  source: {
    type: String,
  },
  published_year: {
    type: String,
  },
  doi: {
    type: String,
  },
  claim: {
    type: String,
  },
  evidence_level: {
    type: String,
  },
});

module.exports = Article = mongoose.model("approved", ArticleSchema);
