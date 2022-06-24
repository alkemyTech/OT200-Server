const db = require("./../models/");

const create = async (data) => {

    const testimonial = await db.Testimonial.create(data);

    return testimonial

}


const find = async (offset, limit) => {
    
    const testimonials = await db.Testimonial.findAndCountAll({ offset, limit })

    return testimonials;

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

const deleteOne = async (id) => {

    const testimonialDel = await db.Testimonial.destroy({ where: { id } });

    return testimonialDel;

}
