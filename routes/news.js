const express = require('express');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');
const verifyToken = require('../middleware/verifyToken');
const {detailNews} = require('../controllers/news');

router.get('/:id',
// verifyToken, 
// checkAdmin, 
detailNews);

module.exports = router;