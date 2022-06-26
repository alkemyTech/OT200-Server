const { check } = require('express-validator');


const bodyrequest = [
    check('name', 'El campo name es obligatorio').isString().notEmpty()
];


module.exports = bodyrequest;