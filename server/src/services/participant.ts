import {
  createParticipantQuery,
  deleteParticipantQuery,
  getParticipantsQuery,
  resetParticipantsQuery,
} from "../db/queries";
import { Participant } from "../models/participant";

interface ServiceResult<T> {
  data?: T;
  error?: string;
}

const addParticipant = async (
  participant: Participant
): Promise<ServiceResult<Participant>> => {
  const result = await createParticipantQuery(participant);
  return { data: result };
};

const getParticipants = async (): Promise<ServiceResult<Participant[]>> => {
  const participants = await getParticipantsQuery();
  return { data: participants };
};

const resetParticipants = async (): Promise<ServiceResult<boolean>> => {
  await resetParticipantsQuery();
  return { data: true };
};

const deleteParticipant = async (
  name: string,
  lastName: string
): Promise<ServiceResult<Participant[]>> => {
  const res = await deleteParticipantQuery(name, lastName);
  return { data: res };
};

export default {
  addParticipant,
  getParticipants,
  resetParticipants,
  deleteParticipant,
};
