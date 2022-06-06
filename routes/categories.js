const { Router } = require('express');
const router = Router();
const { categoriesFields } = require('../helpers');
const checkAdmin = require('../middleware/checkAdmin');
const verifyToken = require('../middleware/verifyToken');

//Middleware para validar campos
const validatorHandler = require('../middleware/validatorHandler');
//Se importa controlador de controllers
const Categories = require('../controllers/categories');


//Methods:
//POST
router.post('/',
verifyToken,
checkAdmin,
validatorHandler( categoriesFields ),
 
//Controller:
Categories.newCategory

);




module.exports = router;