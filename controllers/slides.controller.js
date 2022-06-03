const { createSlide, slideCount } = require('../services/slide.service');

const createNewSlide = async (req, res) => {
  
  const { text, order, organizationId } = req.body;
  if (!req.file || !req.file.lenght) return res.status(400).json({ error: true, message: "Debes seleccionar una imagen"});
  
  try {
    const currentOrder = await slideCount();
    const slide = {
      imageUrl: `http://localhost:3000/slides/${req.file.filename}`,
      text,
      order: order || currentOrder + 1,
      organizationId
    }

    const newSlide = await createSlide(slide);
    res.status(201).json({error: false, data: newSlide, message: "creaste un nuevo slide"});
  }
  catch (error) {
      res.status(500).json({error: true, message: `Ocurrió un error, no se pudo crear el slide, Error: ${error}`});
    }
}

module.exports = { createNewSlide };