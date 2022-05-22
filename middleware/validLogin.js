const {body} = require('express-validator');
const db = require('../models');
const bcrypt = require('bcrypt');

module.exports = async [
    body('email').notEmpty().withMessage('Obligatorio').isEmail().withMessage('Ingrese un email valido.').custom(value => {
        return db.User.findUserByEmail(value).then(user => {
            if(!user || !bcrypt.compareSync(req.body.password, user.password)){
                return await Promise.reject('Email o contraseña incorrectos');
            }
        }).catch(error => {
            return Promise.reject(error, 'ok: false');
        });
    }),    
    body('password').notEmpty().withMessage('Obligatorio').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres.')
]