import { Router, Request, Response } from 'express';
import { addParticipant, getParticipants, resetParticipants } from '../controllers/participant';

const router = Router();

router.post('/', addParticipant)
router.get('/', getParticipants)
//router.del('/', deleteParticipant)
//router.put('/', updateParticipant)
router.post('/reset', resetParticipants)

export default router;