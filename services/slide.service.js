const slideModel = require('../models').Slide;


const slideCount = async () => {
  try {
    return slideModel.count();
  }
  catch (err) {
    throw err;
  }
}

const createSlide = async (slide) => {
  try {
    return await slideModel.create(slide);
  }
  catch (err) {
    throw err;
  }
}

module.exports = { slideCount, createSlide };