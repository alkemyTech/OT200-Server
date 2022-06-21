const { check } = require('express-validator');


const bodyrequest = [
    check('name', 'El campo name es obligatorio').isString().notEmpty(),
    check('description', 'El campo description es obligatorio').isString().notEmpty(),
    check('image', 'El campo image es obligatorio').isString().notEmpty(),
];


module.exports = bodyrequest;