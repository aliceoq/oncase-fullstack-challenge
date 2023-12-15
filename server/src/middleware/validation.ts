import { NextFunction } from "express";
import { Request, Response } from "express";
import { body } from 'express-validator';
import { participants } from "../services/participant";

export const participantValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('participation').isNumeric().withMessage('Participation must be a number'),
];

export const checkParticipantExistence = async (req: Request, res: Response, next: NextFunction) => {
  const { name, lastName } = req.body;

  try {
    const exists = participantExists(name, lastName);
    if (exists) return res.status(400).json({ error: 'Participant with the same name and last name already exists.' });
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const checkParticipantNonExistence = async (req: Request, res: Response, next: NextFunction) => {
  const { name, lastName } = req.body;

  try {
    const exists = !participantExists(name, lastName);
    if (exists) return res.status(400).json({ error: 'A participant with this first and last name does not exist.' });
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const participantExists = (name: string, lastName: string): boolean => {
  return participants.some(
    (participant) =>
      participant.name === name && participant.lastName === lastName
  );
};
