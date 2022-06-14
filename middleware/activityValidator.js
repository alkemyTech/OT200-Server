const { body, validationResult } = require('express-validator');

const verifyFields = [
    body("name", "El campo name no puede estar vacio").notEmpty().exists(),
    body("content", "El campo name no puede estar vacio").notEmpty().exists()
];

const errorHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors});
    } else {
        next();
    }
}


module.exports = {
    verifyFields,
    errorHandler
}