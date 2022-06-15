const express = require('express');
const router = express.Router();
const newsFieldsValidation = require('../middleware/newsValidator');
const validatorHandler = require('../middleware/validatorHandler');
const checkAdmin = require('../middleware/checkAdmin');
const verifyToken = require('../middleware/verifyToken');
const {detailNews, createNews, findAllNews} = require('../controllers/news');

router.post('/', 
verifyToken, 
checkAdmin, 
validatorHandler(newsFieldsValidation), createNews)

router.get('/', findAllNews);

router.get('/:id',
verifyToken, 
checkAdmin, 
detailNews);

module.exports = router;