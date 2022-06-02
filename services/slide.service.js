const slideModel = require('../models').Slide;


const slideCount = async () => {
    return await slideModel.count();
}

const createSlide = async (slide) => {
    return await slideModel.create(slide);
}

module.exports = { slideCount, createSlide };