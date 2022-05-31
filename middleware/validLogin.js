const {body, validationResult} = require('express-validator');

const validLogin = [        
    body('email').notEmpty().withMessage('Obligatorio').isEmail().withMessage('Ingrese un email valido.'),
    body('password').notEmpty().withMessage('Obligatorio').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres.')
]

const validations = (req, res, next) => {
    let errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            message: 'Error',
            errors: errors.array() 
        });
    }
    next();
}




module.exports = {validLogin, validations};