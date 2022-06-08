const { check } = require('express-validator');


const commentsFields = [
    check('post_id', 'El campo post_id es obligatorio').not().isEmpty(),
    check('user_id', 'El campo user_id es obligatorio').not().isEmpty(),
    check('body', 'El campo body es obligatorio').trim().not().isEmpty(),
];


module.exports = commentsFields;