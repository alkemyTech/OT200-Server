const express = require("express");
const router = express.Router();

const  { getAllCategories, newCategory, getOneCategory, deleteCategory, updateCategory  } = require('../controllers/categories');

const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

const { categoriesFields } = require('../helpers');
const validatorHandler = require("../middleware/validatorHandler");
const bodyrequest = require("../helpers/checkCategories");


router.put(
  "/:id",
  verifyToken,
  checkAdmin,
  validatorHandler(bodyrequest),
  updateCategory
);

router.post('/',verifyToken , checkAdmin, validatorHandler( categoriesFields ), newCategory);

router.get("/", verifyToken, checkAdmin, getAllCategories);

router.get("/:id", verifyToken, checkAdmin, getOneCategory);

router.delete(
  "/:id",
  verifyToken,
  checkAdmin,
  deleteCategory
);


module.exports = router;

