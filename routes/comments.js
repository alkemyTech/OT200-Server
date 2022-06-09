const { Router } = require('express');
const router = Router();

const verifyToken = require('../middleware/verifyToken');
const validatorHandler = require('../middleware/validatorHandler');
const { commentsFields, updateFields } = require("../helpers/checkCommentsFields");
const { newComment } = require('../controllers/comments.controller');


router.post('/', verifyToken, validatorHandler(commentsFields), newComment);
router.put("/:id", verifyToken, validatorHandler(updateFields), verifyOwner, updateComment);




module.exports = router;