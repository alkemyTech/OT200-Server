const router = require('express').Router();
const { createNewSlide } = require('../controllers/slides.controller');
const { upload } = require('../middleware/multer');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

//multer saves slide in public/slides folder
router.post('/', verifyToken, checkAdmin, upload.single('slide'), createNewSlide);

module.exports = router;