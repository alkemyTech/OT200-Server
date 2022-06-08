const { Router } = require('express');
const router = Router();

const verifyToken = require('../middleware/verifyToken');
const validatorHandler = require('../middleware/validatorHandler');
const commentsFields = require('../helpers/checkCommentsFields');
const { newComment } = require('../controllers/comments.controller');


router.post('/', verifyToken, validatorHandler(commentsFields), newComment );




module.exports = router;