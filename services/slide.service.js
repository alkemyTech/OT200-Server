const slideModel = require('../models').Slide;


const slideCount = async () => {
    return await slideModel.count();
}

const createSlide = async (slide) => {
    return await slideModel.create(slide);
}



const destroySlide = async( id ) => {
    
    
    const slide = await slideModel.findByPk(id);

    
    if( !slide ) throw {message: `El slide con id: -${id}- no se encuentra en DB`, status:400};

    
    await slide.destroy();

    return;

};

const findOne = async (id) => {

    const slide = await slideModel.findByPk(id);

    return slide;

}

module.exports = { slideCount, createSlide, destroySlide, findOne };