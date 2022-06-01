const multer = require('multer');

// multer storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/slides/');
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    // each image name is composed by its original name, the current timestamp and its extension in lowerCase
    //cada nombre de imagen esta compuesto por el nombre original, el timestamp actual y la extensión en minúscula
    cb( null, `${originalname.split('.')[0]}-${Date.now()}.${originalname.split('.')[1].toLowerCase()}` );
  }
});
const upload = multer({ storage: storage });

module.exports = { upload };