const express = require("express");
const validatorHandler = require("../middlewares/validatorHandler");
const { checkSchema } = require("express-validator");

const UserService = require("./../services/user");
const registrationSchema = require("./../schemas/user");

const service = new UserService();
const router = express.Router();

router.post(
  "/register",
  validatorHandler(checkSchema(registrationSchema)),
  async (req, res) => {
    const body = req.body;
    const newUser = await service.create(body);
    res.json(newUser);
  }
);
module.exports = router;
