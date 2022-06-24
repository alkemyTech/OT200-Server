
const { create, testimonalUpdate, deleteOne, find } = require("../services/testimonial");


const getAllTestimonials = async (req, res) => {

    try {

        const { page } = req.query;

        const currentPage = page && Number(page) > 0 ? Number(page) : 0;

        const limit = 10;

        const offset = currentPage * limit;

        const prevPage = currentPage - 1;

        const nextPage = currentPage + 1;

        const testimonials = await find(offset, limit);

        const { count } = testimonials;

        const totalPages = Math.ceil(count / limit);

        if(Number(currentPage) > totalPages - 1) return res.status(400).json( { messaje: `There are just ${totalPages} pages.` } );
        
        return res.json({ 
            prevPage: `${ prevPage < 0 ? 'There is no previous page' : 'http://localhost:3000/testimonials?page=' + prevPage }`,            
            currentPage: `http://localhost:3000/testimonials?page=${currentPage}`,
            nextPage: `${ nextPage >= totalPages  ? 'There is no next page' : 'http://localhost:3000/testimonials?page=' + nextPage }`,
            totalPages,
            testimonials,
        });         
            
    } catch (error) {

        return res.status(500).json({
            error: true,
            message: "Something went wrong",
        });
        
    }

};

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

const updateTestimonial = async (req, res) => {
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
