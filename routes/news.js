const express = require('express');
const router = express.Router();
const {validateNews, validations} = require('../middleware/news');
const newsController = require('../controllers/news');

router.post('/',validateNews(validations),newsController.create)

module.exports = router;