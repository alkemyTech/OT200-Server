const express = require('express');
const router = express.Router();
const newsFieldsValidation = require('../middleware/newsValidator');
const {createNews} = require('../controllers/news');
const validatorHandler = require('../middlewares/validatorHandler');
const {checkAdmin, verifyToken} = require('../middleware/checkAdmin');

router.post('/', verifyToken, checkAdmin, validatorHandler(newsFieldsValidation), createNews)

module.exports = router;