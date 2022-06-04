const slideModel = require('../models').Slide;


const slideCount = async () => {
    return await slideModel.count();
}

const createSlide = async (slide) => {
    return await slideModel.create(slide);
}


//Elimina un registro de la DB
const destroySlide = async( id ) => {
    //Busca el registro en la Db por id
    const slide = await slideModel.findByPk(id);

    //Si el registro no existe, devuelve un mensaje de error.
    if( !slide ) throw  `El slide con id: -${id}- no se encuentra en DB`;

    //Si el regitro existe lo elimina.
    await slide.destroy();

    return;

};

module.exports = { slideCount, createSlide, destroySlide };