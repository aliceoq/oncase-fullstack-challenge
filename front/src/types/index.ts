export type Participant = {
  id?: string;
  name: string;
  lastname: string;
  participation: number;
};

export type ContextType = {
  participants: Participant[];
};
