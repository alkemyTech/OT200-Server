const express = require("express");
const router = express.Router();
const  { getAllCategories, newCategory, getOneCategory } = require('../controllers/categories');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

const { categoriesFields } = require('../helpers');
const validatorHandler = require('../middleware/validatorHandler');



router.post('/',verifyToken , checkAdmin, validatorHandler( categoriesFields ), newCategory);

router.get("/", verifyToken, checkAdmin, getAllCategories);

router.get("/:id", verifyToken, checkAdmin, getOneCategory);



module.exports = router;