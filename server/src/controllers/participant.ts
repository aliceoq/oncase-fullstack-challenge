import { Request, Response } from "express";
import service from "../services/participant";

const addParticipant = (req: Request, res: Response) => {
  try {
    const participant = req.body;
    const result = service.addParticipant(participant);

    if (result.error) res.send(400).send({ error: result.error });
    else res.json(result.data);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getParticipants = (req: Request, res: Response) => {
  try {
    const participants = service.getParticipants();
    res.json(participants);
  } catch (err) {
    res.status(500).send(err);
  }
};

const resetParticipants = (req: Request, res: Response) => {
  service.resetParticipants();
  res.send("Reseted participants");
};

export { addParticipant, getParticipants, resetParticipants };
