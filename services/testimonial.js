const db = require("./../models/");

const create = async (data) => {

    const testimonial = await db.Testimonial.create(data);

    return testimonial

}

const deleteOne = async (id) => {

    const testimonialDel = await db.Testimonial.destroy({ where: { id } });

    return testimonialDel;

}

module.exports = {
    create,
    deleteOne
}
