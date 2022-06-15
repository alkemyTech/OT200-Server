const express = require("express");
const router = express.Router();
const getCategories = require("../controllers/categories").getAllCategories;
const verifyToken = require("../middleware/verifyToken");
const checkAdmin = require("../middleware/checkAdmin");
const { updateCategory } = require("../controllers/categories");
const validatorHandler = require("../middleware/validatorHandler");
const bodyrequest = require("../helpers/checkCategories");

router.get("/", verifyToken, checkAdmin, getCategories);
router.put(
  "/:id",
  verifyToken,
  checkAdmin,
  validatorHandler(bodyrequest),
  updateCategory
);

module.exports = router;
