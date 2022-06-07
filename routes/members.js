const express = require("express");
const { createMember } = require("../controllers/members.controller");
const {
  verifyInputs,
  errorhandler,
} = require("../middleware/verifyMembersInputs");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/", verifyToken, verifyInputs, errorhandler, createMember);

module.exports = router;
