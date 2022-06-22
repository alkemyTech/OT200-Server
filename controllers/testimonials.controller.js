
const { create, testimonalUpdate, deleteOne } = require("../services/testimonial");


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

const deleteTestimonial = async (req, res) => {
    try {
        
        const id = req.params.id;

        const result = await deleteOne(id);

        if (result === 0) {

            return res.status(404).json({
                error: true,
                message: "Testimonial not found"
            })

        } else {
            
            return res.json({
                message: "Deleted",
                id: id
            })
        }

    } catch (error) {
        
        return res.status(500).json({
            error: true,
            message: "An error has ocurred"
        })

    }
};

module.exports = {
    getAllTestimonials,
    getOneTestiominal,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
};
