import { body } from 'express-validator';

export const blogValidationRules = [
    body('title')
        .isString().withMessage('Title must be a string')
        .isLength({ min: 2, max: 100 }).withMessage('Title must be between 2 and 100 characters long'),
    body('subtitle')
        .isString().withMessage('Subtitle must be a string')
        .withMessage('Subtitle must be between 2 and 150 characters long'),

    body('content')
        .isString().withMessage('Content must be a string')
        .isLength({ min: 2, max: 500 }).withMessage('Content must be between 2 and 500 characters long'),

    body('image').isObject().withMessage('Image must be an object'),

    body('image.url')
        .isString().withMessage('Image URL must be a string'),

    body('image.alt')
        .optional()
        .isString().withMessage('Image alt text must be a string'),
];