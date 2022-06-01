const validatorHandler = require("../middlewares/validatorHandler");
const registrationSchema = require("./../schemas/user");
const express = require("express");
const { checkSchema } = require("express-validator");
const { createUser } = require("../controllers/auth.controller");
const {validLogin} = require('../middleware/validLogin');
const userController = require('../controllers/users.controller');
const router = express.Router();


router.post('/login', validatorHandler(validLogin), userController.login)

router.post(
  "/register",
  validatorHandler(checkSchema(registrationSchema)),
  createUser
);
module.exports = router;