const validatorHandler = require("../middlewares/validatorHandler");
const registrationSchema = require("./../schemas/user");
const express = require("express");
const { checkSchema } = require("express-validator");
const { createUser } = require("../controllers/auth.controller");
const {generateToken, userVerify} = require("../middleware/userToken");
const router = express.Router();

router.post('/login',generateToken, userVerify)
router.post(
  "/register",
  validatorHandler(checkSchema(registrationSchema)),
  createUser
);
module.exports = router;
