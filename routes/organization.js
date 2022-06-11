const { Router } = require('express');
const router = Router();

const { updatedOrganizationData } = require('../controllers/organization');


router.put('/public/:id', updatedOrganizationData )


module.exports = router;