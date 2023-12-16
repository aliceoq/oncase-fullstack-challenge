import { Router } from "express";
import {
  addParticipant,
  getParticipants,
  deleteParticipants,
  deleteParticipant,
  updateParticipant,
} from "../controllers/participant";
import {
  deleteParticipantRules,
  participantValidationRules,
} from "../middleware/validation";

const router = Router();

router.post("/", participantValidationRules, addParticipant);
router.get("/", getParticipants);
router.delete("/", deleteParticipantRules, deleteParticipant);
router.put("/", participantValidationRules, updateParticipant)
router.delete("/reset", deleteParticipants);

export default router;
