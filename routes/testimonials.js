const express = require("express");
const router = express.Router();


const { createTestimonial, updateTestimonial, deleteTestimonial } = require("../controllers/testimonials.controller");

const validatorHandler = require("../middleware/validatorHandler");
const { checkSchema } = require("express-validator");
const testimonialSchema = require("../schemas/testimonial");
const verifyToken = require("./../middleware/verifyToken")
const checkAdmin = require("../middleware/checkAdmin");
const testimonialsFields = require("../helpers/checkTestimonials");

router.post(
    "/",
    // verifyToken,
    // checkAdmin,
    validatorHandler(checkSchema(testimonialSchema)),
    createTestimonial
);



router.put("/:id",
    verifyToken,
    checkAdmin,
    validatorHandler(testimonialsFields),
    updateTestimonial)


router.delete("/:id",
verifyToken, 
checkAdmin, 
deleteTestimonial)

module.exports = router;