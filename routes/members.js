var express = require("express");
const { createMember } = require("../controllers/members.controller");
const checkAdmin = require("../middleware/checkAdmin");
const verifyToken = require("../middleware/verifyToken");
var router = express.Router();

router.post("/", verifyToken, checkAdmin, createMember);

module.exports = router;
