const router = require('express').Router();
const { createNewSlide } = require('../controllers/slides.controller');
const { upload } = require('../middleware/multer');

//multer saves slide in public/slides folder
router.post('/', upload.single('slide'), createNewSlide);

module.exports = router;