const express = require('express');
const {updateNews} = require('../controllers/news');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');
const verifyToken = require('../middleware/verifyToken');

router.put('/:id',
// verifyToken,
// checkAdmin,
updateNews);

module.exports = router;