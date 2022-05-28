const express = require('express');
const newsController = require('../controllers/news');
const router = express.Router();

router.get('/:id',newsController.detail);

module.exports = router;