const express = require('express');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');
const verifyToken = require('../middleware/verifyToken');
const validatorHandler = require('../middleware/validatorHandler');
const newsFieldsValidation = require('../middleware/newsValidator');
const {updateNews, detailNews, createNews, findAllNews} = require('../controllers/news');

router.get('/:id',
verifyToken, 
checkAdmin, 
detailNews,
findAllNews);

router.post('/', 
verifyToken, 
checkAdmin, 
validatorHandler(newsFieldsValidation), createNews)

router.get('/', findAllNews);

router.put('/:id',
verifyToken,
checkAdmin,
validatorHandler(newsFieldsValidation),
updateNews);


module.exports = router;