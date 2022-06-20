const express = require('express');
const router = express.Router();
const {verifyToken, checkAdmin} = require('../middleware');
const getAllComments = require('../controllers/comment.controller');
const validatorHandler = require('../middleware/validatorHandler');
const commentsFields = require('../helpers/checkCommentsFields');
const { newComment } = require('../controllers/comments.controller');

router.get('/', 
verifyToken, 
checkAdmin, 
getAllComments);


router.post('/', verifyToken, validatorHandler(commentsFields), newComment );




module.exports = router;
