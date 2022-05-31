const express = require('express');
const router = express.Router();
const {validations,validLogin} = require('../middleware/validLogin');
const userController = require('../controllers/users.controller');

router.post('/login', validations(validLogin), userController.login)

module.exports = router;