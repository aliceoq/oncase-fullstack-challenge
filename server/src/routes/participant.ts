import { Router } from "express";
import {
  addParticipant,
  getParticipants,
  deleteParticipants,
  deleteParticipant,
  updateParticipant,
} from "../controllers/participant";
import {
  newParticipationRule,
  participantNameRules,
  updateParticipationRule,
} from "../middleware/validation";

const router = Router();

router.post("/", newParticipationRule, addParticipant);
router.get("/", getParticipants);
router.delete("/", participantNameRules, deleteParticipant);
router.put(
  "/",
  participantNameRules,
  updateParticipationRule,
  updateParticipant
);
router.delete("/reset", deleteParticipants);

export default router;
