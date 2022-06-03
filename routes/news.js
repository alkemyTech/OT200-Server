const express = require('express');
const newsController = require('../controllers/news');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');

router.put('/:id',checkAdmin, newsController.update);

module.exports = router;