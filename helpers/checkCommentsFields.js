const { check } = require("express-validator");

const commentsFields = [
  check("post_id", "El campo post_id es obligatorio").not().isEmpty(),
  check("user_id", "El campo user_id es obligatorio").not().isEmpty(),
  check("body", "El campo body es obligatorio").trim().not().isEmpty(),
];

const updateFields = [
  check("user_id", "Please introduce a valid user_id").notEmpty().isNumeric(),
  check("post_id", "Please introduce a valid post_id").notEmpty().isNumeric(),
  check("body", "Please introduce a valid body").notEmpty().isString(),
];

module.exports = { commentsFields, updateFields };
