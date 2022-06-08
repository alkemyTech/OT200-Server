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

const {
  verifyInputs,
  errorhandler,
} = require("../middleware/verifyMembersInputs");
const verifyToken = require("../middleware/verifyToken");

router.post("/", verifyToken, verifyInputs, errorhandler, createMember);

module.exports = router;
