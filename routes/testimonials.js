const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  return res.json({ message: "success" });
});

module.exports = router;
