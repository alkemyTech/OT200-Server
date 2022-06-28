const express = require("express");
const router = express.Router();

const { getOrganizations, updatedOrganizationData } = require("../controllers/organizations.controller");
const { verifyToken, checkAdmin } = require('../middleware');
const validatorHandler = require('../middleware/validatorHandler');
const { organizationFields } = require('../helpers');


router.get(
  "/",
  verifyToken,
  getOrganizations
);

router.put('/public/:id', verifyToken, checkAdmin, validatorHandler(organizationFields), updatedOrganizationData );

module.exports = router;