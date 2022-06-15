const db = require("./../models/");

const create = async (data) =>{    

    const testimonial = await db.Testimonial.create(data);    

    return testimonial

}

const testimonalUpdate = async (body, testimonialId) => {
    const testimonial = await db.Testimonial.update(
        { body },
        {
            where: {
                id: parseInt(testimonialId),
            },
        }
    );

    if (!testimonial) {
        return { success: false, message: "testimonial not found" };
    } else {
        return testimonial;
    }
}

module.exports = { create, testimonalUpdate }