const express = require("express");
const router = express.Router();

const Article = require("../../models/Approved");

router.post("/", (req, res) => {
  Article.create(req.body)
    .then((article) => res.json({ msg: "article added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this article" })
    );
});
