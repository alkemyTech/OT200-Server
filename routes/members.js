const express = require("express");
const router = express.Router();
const { getMembers, deleteOneMember } = require("../controllers/members.controller");
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

module.exports = router;
