const express = require('express');
const router = express.Router();
const validations = require('../middleware/news');
const newsController = require('../controllers/news');
const validatorHandler = require('../middlewares/validatorHandler');
const checkAdmin = require('../middlewares/checkAdmin');

router.post('/',validatorHandler(validations),newsController.create,checkAdmin)

module.exports = router;