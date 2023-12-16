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

const deleteParticipantsQuery = async () => {
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

const updateParticipantQuery = async (
  participant: Participant
): Promise<Participant> => {
  const res = await pool.query(
    "UPDATE participants SET participation = $1 WHERE name = $2 AND lastName = $3 RETURNING *",
    [participant.participation, participant.name, participant.lastName]
  );

  if (res.rowCount === 0) throw new Error('Participant with the given name and last name does not exist.');
  else return res.rows[0];
};

const test = () => {
  pool.query("select now()");
};

export {
  createParticipantQuery,
  getParticipantsQuery,
  deleteParticipantsQuery,
  deleteParticipantQuery,
  updateParticipantQuery,
  test,
};
