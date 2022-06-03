const express = require('express');
const router = express.Router();
const validations = require('../middleware/news');
const newsController = require('../controllers/news');
const validatorHandler = require('../middlewares/validatorHandler');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/',validatorHandler(validations),checkAdmin,newsController.create)

module.exports = router;