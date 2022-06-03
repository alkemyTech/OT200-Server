const express = require("express");
const router = express.Router();
const { getMembers } = require("../controllers/members.controller");
const checkAdmin = require("../middleware/checkAdmin");
const verifyToken = require("../middleware/verifyToken");

router.get(
  "/",
  // verifyToken,
  // checkAdmin,
  getMembers
);
module.exports = router;
