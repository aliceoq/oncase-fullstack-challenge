import { Participant } from "../models/participant";

// Data
let participants: Participant[] = [
  {
    name: "Alice",
    lastName: "Oliveira",
    participation: 20,
  },
];

// Validation
const validateParticipant = (participant: any): boolean => {
  return (
    !!participant.name &&
    !!participant.lastName &&
    typeof participant.participation === "number"
  );
};

const participantExists = (name: string, lastName: string): boolean => {
  return participants.some(
    (participant) =>
      participant.name === name && participant.lastName === lastName
  );
};

interface ServiceResult<T> {
  data?: T;
  error?: string;
}

const addParticipant = (
  participant: Participant
): ServiceResult<Participant> => {
  const result = validateParticipant(participant);
  if (!result)
    return {
      error:
        "Invalid format in request body. The participant object should have name (string), last name (string) and participation (number).",
    };
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
