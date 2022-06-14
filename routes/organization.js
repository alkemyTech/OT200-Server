const express = require('express');
const router = express.Router();
const {getPublicOrganization} = require('../controllers/organization.controller.js');

router.get('/public', getPublicOrganization);

module.exports = router;