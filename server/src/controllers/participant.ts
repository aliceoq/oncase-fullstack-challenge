import { Request, Response } from "express";
import service from "../services/participant";
import { validationResult } from "express-validator";

const addParticipant = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const participant = req.body;
    service.addParticipant(participant);
    res.status(201).send('Participant created.');
  } catch (err) {
    res.status(500).send(err);
  }
};

const getParticipants = (req: Request, res: Response) => {
  try {
    const participants = service.getParticipants();
    res.status(200).json(participants);
  } catch (err) {
    res.status(500).send(err);
  }
};

const resetParticipants = (req: Request, res: Response) => {
  service.resetParticipants();
  res.status(201).send("Reseted participants.");
};

export { addParticipant, getParticipants, resetParticipants };
