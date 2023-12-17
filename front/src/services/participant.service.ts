import { AxiosResponse } from "axios";
import api from "./api";
import { Participant } from "../types";

const getParticipantsRequest = async (): Promise<
  AxiosResponse<Participant[]>
> => {
  const response = await api.get("participants", {
    validateStatus: (status: number) => [200].includes(status),
  });
  return response;
};

export { getParticipantsRequest };
