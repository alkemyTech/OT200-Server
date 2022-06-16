const { Router } = require('express');
const router = Router();

const verifyToken = require('../middleware/verifyToken');
const checkOwnership = require('../middleware/checkOwnership')
const validatorHandler = require('../middleware/validatorHandler');
const commentsFields = require('../helpers/checkCommentsFields');
const { newComment, deleteComment } = require('../controllers/comments.controller');


router.post('/', verifyToken, validatorHandler(commentsFields), newComment );

router.delete('/:id',verifyToken, deleteComment );






module.exports = router;