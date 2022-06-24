const { check } = require("express-validator");

const slidesInputs = [
  check("imageUrl", "the input called imageUrl is not valid")
    .notEmpty()
    .isString(),
  check("text", "the input called text is not valid").notEmpty().isString(),
  check("order", "the input called order is not valid").notEmpty().isNumeric(),
  check("organizationId", "the input called organizationId is not valid")
    .notEmpty()
    .isNumeric(),
];
module.exports = slidesInputs;
