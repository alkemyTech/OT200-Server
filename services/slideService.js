const slideModel = require("../models").Slide;

const slideCount = async () => {
  return await slideModel.count();
};

const createSlide = async (slide) => {
  return await slideModel.create(slide);
};

const destroySlide = async (id) => {
  const slide = await slideModel.findByPk(id);

  if (!slide)
    throw {
      message: `El slide con id: -${id}- no se encuentra en DB`,
      status: 400,
    };

  await slide.destroy();

  return;
};

const getSlides = async () => {
  const slides = await slideModel.findAll({
    attributes: ["imagenURL", "order"],
  });
  return slides;
};

module.exports = { slideCount, createSlide, destroySlide, getSlides };
