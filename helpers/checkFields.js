const { check } = require('express-validator');


const categoriesFields = [
    check('name', 'El campo name es obligatorio').trim().not().isEmpty().isString(),
];

const organizationFields = [
    check('name', 'El campo name es obligatorio').trim().not().isEmpty().isString(),
    check('image', 'El campo image es obligatorio').trim().not().isEmpty().isString(),
    check('email', 'El campo email es obligatorio').not().isEmpty(),
    check('email', 'Tiene que ser un formato de email valido').isEmail(),
    check('welcomeText', 'El campo welcomeText es obligatorio').trim().not().isEmpty().isString(),
    check('facebookUrl', 'El campo facebookUrl es obligatorio').trim().not().isEmpty().isString(),
    check('instagramUrl', 'El campo instagramUrl es obligatorio').trim().not().isEmpty().isString(),
    check('linkedinUrl', 'El campo linkedinUrl es obligatorio').trim().not().isEmpty().isString(),
];


module.exports = {
    categoriesFields,
    organizationFields
}