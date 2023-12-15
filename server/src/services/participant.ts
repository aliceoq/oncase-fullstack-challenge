import { Participant } from "../models/participant";

// Data
export let participants: Participant[] = [
  {
    name: "Alice",
    lastName: "Oliveira",
    participation: 20,
  },
];

interface ServiceResult<T> {
  data?: T;
  error?: string;
}

const addParticipant = (
  participant: Participant
): ServiceResult<Participant> => {
  participants.push(participant);
  return { data: participant };
};

const getParticipants = (): ServiceResult<Participant[]> => {
  return { data: participants };
};

const resetParticipants = (): ServiceResult<boolean> => {
  participants = [];
  return { data: true };
};

const deleteParticipant = (
  name: string,
  lastName: string
): ServiceResult<Participant> => {
  const index = participants.findIndex(
    (participant) =>
      participant.name === name && participant.lastName === lastName
  );

  if (index !== -1) {
    const deletedParticipant = participants.splice(index, 1)[0];
    return { data: deletedParticipant };
  } 
  
  return { error: 'Participant not found.' };
};

export default { addParticipant, getParticipants, resetParticipants, deleteParticipant };
