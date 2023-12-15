import { Router } from 'express';
import { addParticipant, getParticipants, resetParticipants } from '../controllers/participant';
import { participantValidationRules } from '../middleware/validation';

const router = Router();

router.post('/', participantValidationRules, addParticipant)
router.get('/', getParticipants)
//router.del('/', deleteParticipant)
//router.put('/', updateParticipant)
router.post('/reset', resetParticipants)

export default router;