const express = require("express");
const router = express.Router();
const getCategories = require('../controllers/categories').getAllCategories;
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');


router.get("/", verifyToken, checkAdmin, getCategories);


module.exports = router;