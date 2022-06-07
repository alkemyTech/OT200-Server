const express = require('express');
const {updateNews} = require('../controllers/news');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');
const verifyToken = require('../middleware/verifyToken');
const validatorHandler = require('../middleware/validatorHandler');
// const newsFieldsValidation = require('../middleware/newsValidator');

router.put('/:id',
// verifyToken,
// checkAdmin,
// validatorHandler(newsFieldsValidation),
updateNews);

module.exports = router;