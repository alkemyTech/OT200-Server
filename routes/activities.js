const express = require('express');
const router = express.Router();
const { updateActivity, createActivity } = require("../controllers/antivityController");
const { verifyFields, errorHandler } = require('../middleware/activityValidator');
const checkAdmin = require("../middleware/checkAdmin");
const verifyToken = require("../middleware/verifyToken");


router.post('/', verifyToken, checkAdmin, verifyFields, errorHandler, createActivity);



router.put("/:id", verifyToken, checkAdmin, updateActivity);


module.exports = router;



