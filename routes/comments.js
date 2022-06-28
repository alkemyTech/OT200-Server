const validatorHandler = require("../middleware/validatorHandler");
const {
  commentsFields,
  updateFields,
} = require("../helpers/checkCommentsFields");
const {
  newComment,
  updateComment,
  getAllComments,
} = require("../controllers/comments.controller");

const verifyOwner = require("../middleware/verifyComment");

const express = require('express');
const router = express.Router();
const {verifyToken, checkAdmin} = require('../middleware');



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
