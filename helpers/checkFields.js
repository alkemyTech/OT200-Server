const { check } = require('express-validator');


const categoriesFields = [
    check('name', 'El campo name es obligatorio').trim().not().isEmpty().isString(),
];




module.exports = {
    categoriesFields
}