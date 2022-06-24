const validatorHandler = require("../middleware/validatorHandler");
const {
  commentsFields,
  updateFields,
} = require("../helpers/checkCommentsFields");
const {
  newComment,
  updateComment,
} = require("../controllers/comments.controller");

const verifyOwner = require("../middleware/verifyComment");

const express = require('express');
const router = express.Router();
const {verifyToken, checkAdmin} = require('../middleware');
const getAllComments = require('../controllers/comment.controller');
const commentsFields = require('../helpers/checkCommentsFields');
const { newComment } = require('../controllers/comments.controller');

router.get('/', 
verifyToken, 
checkAdmin, 
getAllComments);



router.post("/", verifyToken, validatorHandler(commentsFields), newComment);

router.put(
  "/:id",
  verifyToken,
  verifyOwner,
  validatorHandler(updateFields),
  updateComment
);


module.exports = router;
