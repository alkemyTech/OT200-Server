const db = require("./../models/");

const create = async (data) =>{    

    const testimonial = await db.Testimonial.create(data);    

    return testimonial

}

const find = async (offset, limit) => {
    
    const testimonials = await db.Testimonial.findAndCountAll({ offset, limit })

    return testimonials;

}

module.exports = {create, find}