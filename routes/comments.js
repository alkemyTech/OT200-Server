const { Router } = require("express");
const router = Router();

const verifyToken = require("../middleware/verifyToken");
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

router.post("/", verifyToken, validatorHandler(commentsFields), newComment);
router.put(
  "/:id",
  verifyToken,
  verifyOwner,
  validatorHandler(updateFields),
  updateComment
);

module.exports = router;
