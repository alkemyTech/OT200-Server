const express = require("express");
const getOrganizations = require("../controllers/organizations.controller");
const router = express.Router();
const verifyToken = require("./../middleware/verifyToken");


router.get(
  "/",
  verifyToken,
  getOrganizations
);


module.exports = router;