import { Participant } from "../models/participant";
import { pool } from "./postgres-config";

const createParticipantQuery = async (participant: Participant) => {
  const res = await pool.query(
    "INSERT INTO participants (name, lastName, participation) VALUES ($1, $2, $3) RETURNING *;",
    [participant.name, participant.lastName, participant.participation]
  );

  return res.rows[0];
};

const getParticipantsQuery = async (): Promise<Participant[]> => {
  const { rows } = await pool.query('SELECT * FROM "participants"');
  return rows;
};

const resetParticipantsQuery = async () => {
  await pool.query("DELETE FROM participants;");
};

const deleteParticipantQuery = async (
  name: string,
  lastName: string
): Promise<Participant[]> => {
  const { rows } = await pool.query(
    `DELETE FROM participants WHERE name = '${name}' AND lastName = '${lastName}';`
  );

  return rows;
};

const test = () => {
  pool.query("select now()");
};

export {
  createParticipantQuery,
  getParticipantsQuery,
  resetParticipantsQuery,
  deleteParticipantQuery,
  test,
};
