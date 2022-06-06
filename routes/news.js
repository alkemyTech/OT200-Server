const express = require('express');
const {detailNews} = require('../controllers/news');
const router = express.Router();
const {checkAdmin, verifyToken} = require('../middleware/checkAdmin');

router.get('/:id',verifyToken, checkAdmin, detailNews);

module.exports = router;