const express = require('express');
const router = express.Router();
const newsFieldsValidation = require('../middleware/newsValidator');
const {createNews} = require('../controllers/news');
const validatorHandler = require('../middlewares/validatorHandler');
const {checkAdmin} = require('../middleware/checkAdmin');
const {verifyToken} = require('../middleware/verifyToken');

router.post('/', 
// verifyToken, 
// checkAdmin, 
validatorHandler(newsFieldsValidation), createNews)

module.exports = router;