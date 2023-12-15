import { Router, Request, Response } from 'express';
import { addParticipant, getParticipants, resetParticipants } from '../controllers/participant';
import { checkParticipantExistence, participantValidationRules } from '../middleware/validation';

const router = Router();

router.post('/', participantValidationRules, checkParticipantExistence, addParticipant)
router.get('/', getParticipants)
//router.del('/', deleteParticipant)
//router.put('/', updateParticipant)
router.post('/reset', resetParticipants)

export default router;