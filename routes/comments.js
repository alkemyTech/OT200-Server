const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');
const getAllComments = require('../controllers/comment.controller');


router.get('/', 
// verifyToken, 
// checkAdmin, 
getAllComments);

module.exports = router;
