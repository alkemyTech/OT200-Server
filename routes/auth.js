const validatorHandler = require("../middleware/validatorHandler");
const registrationSchema = require("./../schemas/user");
const express = require("express");
const { checkSchema } = require("express-validator");
const { createUser, loginUser } = require("../controllers/auth.controller");
const {validLogin} = require('../middleware/validLogin');
const router = express.Router();


router.post('/login', validatorHandler(validLogin), loginUser)

router.post(
  "/register",
  validatorHandler(checkSchema(registrationSchema)),
  createUser
);
module.exports = router;