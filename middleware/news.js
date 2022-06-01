const {body} = require('express-validator');

const validations = [
    body('title').notEmpty().withMessage('Title is required').isLength({min: 3, max: 15}).withMessage('Title must be between 3 and 15 characters long'),
    body('content').notEmpty().withMessage('Content is required').isLength({min: 10}).withMessage('Content must be at least 10 characters long'),
    body('image').notEmpty().withMessage('Image is required')
]

module.exports = validations;