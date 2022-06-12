const express = require("express");
const router = express.Router();

const { createTestimonial, getAllTestimonials } = require("../controllers/testimonials.controller");
const validatorHandler = require("../middleware/validatorHandler");
const { checkSchema } = require("express-validator");
const testimonialSchema = require("../schemas/testimonial");
const verifyToken = require("./../middleware/verifyToken")
const checkAdmin = require("../middleware/checkAdmin");

router.get(
    "/",
    verifyToken,
    getAllTestimonials
);

router.post(
    "/",
    verifyToken,
    checkAdmin,
    validatorHandler(checkSchema(testimonialSchema)),
    createTestimonial
);

module.exports = router;