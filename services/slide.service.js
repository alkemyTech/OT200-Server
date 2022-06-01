const slideModel = require('../models').Slide;

const createSlide = async (slide) => {
  try {
    return await slideModel.create(slide);
  }
  catch (err) {
    throw err;
  }
}

module.exports = { createSlide };