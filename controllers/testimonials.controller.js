const create = require("../services/testimonial");

const getAllTestimonials = (req, res) => {};

const getOneTestiominal = (req, res) => {};

const createTestimonial = async (req, res) => {    
    try {
        
        const data = req.body;
        const newTestimonial = await create(data);

        return res.status(201).json(newTestimonial)

    } catch (error) {
        
        return res.status(500).json({
            error: true,
            message: "Something was wrong",
        });

    }
};

const updateTestimonial = (req, res) => {};

const deleteTestimonial = (req, res) => {};

module.exports = {
    getAllTestimonials,
    getOneTestiominal,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
};
