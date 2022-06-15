const { Router } = require("express");
const router = Router();

const verifyToken = require("../middleware/verifyToken");
const validatorHandler = require("../middleware/validatorHandler");
const {
  commentsFields,
  updateFields,
} = require("../helpers/checkCommentsFields");
const { newComment } = require("../controllers/comments.controller");
const checkOwnership = require("../middleware/checkOwnership");

router.post("/", verifyToken, validatorHandler(commentsFields), newComment);
router.put(
  "/:id",
  verifyToken,
  checkOwnership,
  validatorHandler(updateFields),
  updateComment
);

module.exports = router;
