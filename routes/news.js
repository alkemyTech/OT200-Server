const express = require('express');
const router = express.Router();
const validations = require('../middleware/news');
const newsController = require('../controllers/news');
const validatorHandler = require('../middlewares/validatorHandler');

router.post('/',validatorHandler(validations),newsController.create)

module.exports = router;