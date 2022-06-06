const express = require('express');
const {detailNews} = require('../controllers/news');
const router = express.Router();
const {checkAdmin} = require('../middleware/checkAdmin');
const {verifyToken} = require('../middleware/verifyToken');

router.get('/:id',
// verifyToken, 
// checkAdmin, 
detailNews);

module.exports = router;