const express = require("express");
const router = express.Router();

const getCategories = require('../controllers/categories').getAllCategories;
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

const { categoriesFields } = require('../helpers');
const validatorHandler = require('../middleware/validatorHandler');
const { newCategory, deleteCategory } = require('../controllers/categories');


router.post('/',verifyToken , checkAdmin, validatorHandler( categoriesFields ), newCategory);


router.get("/", verifyToken, checkAdmin, getCategories);

router.delete(
  "/:id",
  verifyToken,
  checkAdmin,
  deleteCategory
);


module.exports = router;

