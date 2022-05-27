const express = require('express');
const NewsController = require('../controllers/news');
const router = express.Router();

router.get('/:id', NewsController.detail);