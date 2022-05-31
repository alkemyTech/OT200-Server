const {body, validationResult} = require('express-validator');

const validateNews = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        });
    }

    next();
}

const validations = [
    body('title').notEmpty().withMessage('Title is required').isLength({min: 3, max: 15}).withMessage('Title must be between 3 and 15 characters long'),
    body('content').notEmpty().withMessage('Content is required').isLength({min: 10}).withMessage('Content must be at least 10 characters long'),
    body('image').notEmpty().withMessage('Image is required')
]

module.exports = {validateNews, validations}