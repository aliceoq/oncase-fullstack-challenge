import { body } from 'express-validator';

export const participantValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('participation').isNumeric().withMessage('Participation must be a number'),
];
