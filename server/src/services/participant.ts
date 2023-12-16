import {
  createParticipantQuery,
  deleteParticipantQuery,
  getParticipantsQuery,
  deleteParticipantsQuery,
  updateParticipantQuery,
} from "../db/queries";
import { Participant } from "../models/participant";

const addParticipant = async (
  participant: Participant
): Promise<Participant> => {
  const result = await createParticipantQuery(participant);
  return result;
};

const getParticipants = async (): Promise<Participant[]> => {
  const participants = await getParticipantsQuery();
  return participants;
};

const deleteParticipants = async (): Promise<void> => {
  await deleteParticipantsQuery();
};

const deleteParticipant = async (
  name: string,
  lastname: string
): Promise<void> => {
  await deleteParticipantQuery(name, lastname);
};

const updateParticipant = async (
  participant: Participant
): Promise<Participant> => {
  const result = await updateParticipantQuery(participant);
  return result
}

export default {
  addParticipant,
  getParticipants,
  deleteParticipants,
  deleteParticipant,
  updateParticipant,
};
