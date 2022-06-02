const express = require('express');
const newsController = require('../controllers/news');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');

router.get('/:id',newsController.detail, checkAdmin);

module.exports = router;