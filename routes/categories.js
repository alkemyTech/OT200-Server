const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

//Middleware para validar campos
const validatorHandler = require('../middlewares/validatorHandler');
//Se importa controlador de controllers
const Categories = require('../controllers/categories');


//Methods:
//POST
router.post('/',
validatorHandler([
    //Campos a validar:
    check('name', 'El campo name es obligatorio').trim().not().isEmpty().isString(),
]), 
//Controller:
Categories.createCategory

);




module.exports = router;