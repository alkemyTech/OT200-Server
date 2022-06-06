const express = require("express");
const { createMember } = require("../controllers/members.controller");
const verifyName = require("../middleware/verifyName");
const { body } = require("express-validator");

const router = express.Router();

router.post(
    "/",
    body("name", "Please enter a valid input").exists().isString(),
    verifyName,
    createMember
);

module.exports = router;
