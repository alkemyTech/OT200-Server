const { body, validationResult } = require("express-validator");

const verifyInputs = body("name", "Please enter a valid input")
    .exists()
    .isString()
    .notEmpty();

const errorhandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        return next();
    }
};

module.exports = { verifyInputs, errorhandler };
