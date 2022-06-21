const { check } = require("express-validator");

const testimonialsFields = [
  check("name", "Invalid Input").notEmpty().isString(),
  check("image", "Invalid Input").notEmpty().isString(),
  check("content", "Invalid Input").notEmpty().isString(),
];

module.exports = testimonialsFields;
