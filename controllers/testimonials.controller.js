const { create, testimonalUpdate } = require("../services/testimonial");

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
            message: "Something went wrong",
        });

    }
};

const updateTestimonial = (req, res) => {
    const { id } = req.params;
    try {
        const testimonial = await testimonalUpdate (req.body, id);
        return res.status(testimonial.id ? 200 : 404).json(testimonial);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const deleteTestimonial = (req, res) => {};

module.exports = {
    getAllTestimonials,
    getOneTestiominal,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
};
