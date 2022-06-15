const router = require('express').Router();
const multer = require('multer');
const { createNewSlide, deleteSlide, updateSlide } = require('../controllers/slides.controller');
const { upload } = require('../middleware/multer');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

//multer saves slide in public/slides folder
router.post('/', verifyToken, checkAdmin, upload.single('slide'), createNewSlide);

//Delete slide
router.delete('/:id', verifyToken, checkAdmin, deleteSlide);

//Update Slide
router.put("/:id",verifyToken,checkAdmin,updateSlide)

// multer error handler if image format is not correct
router.use( (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    return res.status(415).json({ error: true, message: 'Image format must be jpg, jpeg or png.'});
  }
});

module.exports = router;