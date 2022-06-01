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

// throws an exeption if file is not jpg jpeg or png
const fileFilter = (req, file, cb) => {
  if (file.mimetype.split('/')[0] === 'image') {
    cb(null, true);
  }
  else {
    cb( new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
}

const upload = multer({ storage, fileFilter });

module.exports = { upload };