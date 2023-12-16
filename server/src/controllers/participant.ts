import { Request, Response } from "express";
import service from "../services/participant";
import { validationResult } from "express-validator";

const addParticipant = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

  try {
    const participant = req.body;
    const result = await service.addParticipant(participant);
    res.status(201).json({ data: result });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

const getParticipants = async (req: Request, res: Response) => {
  try {
    const participants = await service.getParticipants();
    res.status(200).json({ data: participants });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

const deleteParticipants = async (req: Request, res: Response) => {
  try {
    await service.deleteParticipants();
    res.status(204).send("Participants deleted.");
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

const deleteParticipant = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });
  try {
    const { name, lastName } = req.body;
    await service.deleteParticipant(name, lastName);
    res.status(204).send("Participant deleted.");
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

const updateParticipant = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });
  try {
    const participant = req.body;
    const result = await service.updateParticipant(participant);
    res.status(200).json({ data: result });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export {
  addParticipant,
  getParticipants,
  deleteParticipants,
  deleteParticipant,
  updateParticipant,
};
