const express = require("express");
const router = express.Router();
const { getMembers,createMember, deleteOneMember } = require("../controllers/members.controller");
const checkAdmin = require("../middleware/checkAdmin");
const verifyToken = require("../middleware/verifyToken");

router.get(
  "/",
  verifyToken,
  checkAdmin,
  getMembers
);

router.delete(
  "/:id",
  // verifyToken,
  deleteOneMember
)

const {
  verifyInputs,
  errorhandler,
} = require("../middleware/verifyMembersInputs");

router.post("/", verifyToken, verifyInputs, errorhandler, createMember);

module.exports = router;
