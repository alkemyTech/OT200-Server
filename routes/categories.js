const express = require("express");
const router = express.Router();
const deleteOneCategory = require("../controllers/categories");
const verifyToken = require("./../middleware/verifyToken")
const checkAdmin = require("../middleware/checkAdmin");


router.delete(
  "/:id",
  verifyToken,
  checkAdmin,
  deleteOneCategory
);
module.exports = router;
