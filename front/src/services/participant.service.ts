import { AxiosResponse } from "axios";
import api from "./api";
import { Participant } from "../types";

const getParticipants = async (): Promise<AxiosResponse<Participant[]>> => {
  const response = await api.get("participants", {
    validateStatus: (status: number) => [200].includes(status),
  });
  return response;
};

const addParticipant = async (participant: Participant): Promise<AxiosResponse<Participant>> => {
  const response = await api.post("participants", participant, {
    validateStatus: (status: number) => [201].includes(status),
  });
  return response;
};

export { getParticipants, addParticipant };
