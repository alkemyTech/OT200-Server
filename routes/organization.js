const { Router } = require('express');
const router = Router();

const { verifyToken, checkAdmin } = require('../middleware');
const validatorHandler = require('../middleware/validatorHandler');
const { organizationFields } = require('../helpers');
const { updatedOrganizationData } = require('../controllers/organization');


router.put('/public/:id', verifyToken, checkAdmin, validatorHandler(organizationFields), updatedOrganizationData );


module.exports = router;