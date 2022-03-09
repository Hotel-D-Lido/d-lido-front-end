const express = require("express");
const router = express.Router();
const path = require("path");

/* Home page */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

/* About page */
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views/about.html"));
});

module.exports = router;
