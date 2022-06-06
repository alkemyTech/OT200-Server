const db = require("./../models/");

const create = async (data) =>{    

    const testimonial = await db.Testimonial.create(data);    

    return testimonial

}

module.exports = create