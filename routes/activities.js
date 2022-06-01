const express = require("express");
const { updateActivity } = require("../controllers/antivityController");
const checkAdmin = require("../middleware/checkAdmin");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.put("/:id", verifyToken, checkAdmin, updateActivity);

module.exports = router;
