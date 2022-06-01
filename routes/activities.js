const express = require("express");
const { updateActivity } = require("../controllers/antivityController");
const checkAdmin = require("../middleware/checkAdmin");

const router = express.Router()

router.put("/:id",checkAdmin,updateActivity)

module.exports = router