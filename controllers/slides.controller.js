const {
  createSlide,
  slideCount,
  destroySlide,
  getSlides,
} = require("../services/slideService");

const createNewSlide = async (req, res) => {
  const { text, order, organizationId } = req.body;
  if (!req.file || !req.file.lenght)
    return res
      .status(400)
      .json({ error: true, message: "Debes seleccionar una imagen" });

  try {
    const currentOrder = await slideCount();
    const slide = {
      imageUrl: `http://localhost:3000/slides/${req.file.filename}`,
      text,
      order: order || currentOrder + 1,
      organizationId,
    };

    const newSlide = await createSlide(slide);
    res.status(201).json({
      error: false,
      data: newSlide,
      message: "creaste un nuevo slide",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Ocurrió un error, no se pudo crear el slide, Error: ${error}`,
    });
  }
};

const deleteSlide = async (req, res) => {
  const { id } = req.params;

  try {
    await destroySlide(id);

    res.json({
      error: false,
      message: `El slide con id: -${id}- ah sido eliminado de la DB`,
    });
  } catch (error) {
    console.log(error);

    if (!error.status) {
      return res.status(500).json({
        error: true,
        message: "Error en el servidor, comuníquese con el administrador",
      });
    }

    res.status(error.status).json({ error: true, message: error.message });
  }
};

const slidesList = async (req, res) => {
  try {
    const slides = await getSlides();
    return res.status(slides ? 200 : 404).json(slides);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { createNewSlide, deleteSlide, slidesList };
