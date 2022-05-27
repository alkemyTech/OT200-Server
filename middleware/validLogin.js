const {body} = require('express-validator');

module.exports =  [
    body('email').notEmpty().withMessage('Obligatorio').isEmail().withMessage('Ingrese un email valido.'),
    body('password').notEmpty().withMessage('Obligatorio').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres.')
]