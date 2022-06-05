const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');
const getAllComments = require('../controllers/comment.controller');


//verifyToken le pasara un user a checkAdmin, el cual, según el middleware, evaluara el campo rolId
//Se comentan ambos middlewares para realizar prueba de ruta.
router.get('/', 
// verifyToken, 
// checkAdmin, 
getAllComments);

module.exports = router;
