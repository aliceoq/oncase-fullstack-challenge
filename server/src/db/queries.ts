import { Participant } from "../models/participant";
import { pool } from "./postgres-config";

const createParticipantQuery = async (participant: Participant) => {
  const res = await pool.query(
    "INSERT INTO participants (name, lastname, participation) VALUES ($1, $2, $3) RETURNING *;",
    [participant.name, participant.lastname, participant.participation]
  );
  return res.rows[0];
};

const getParticipantsQuery = async (): Promise<Participant[]> => {
  const { rows } = await pool.query('SELECT * FROM "participants" ORDER BY id ASC');
  return rows;
};

const deleteParticipantsQuery = async () => {
  await pool.query("DELETE FROM participants;");
};

const deleteParticipantQuery = async (
  name: string,
  lastname: string
): Promise<Participant[]> => {
  const { rows } = await pool.query(
    `DELETE FROM participants WHERE name = '${name}' AND lastname = '${lastname}';`
  );

  return rows;
};

const updateParticipantQuery = async (
  participant: Participant
): Promise<Participant> => {
  const res = await pool.query(
    "UPDATE participants SET participation = $1 WHERE name = $2 AND lastname = $3 RETURNING *",
    [participant.participation, participant.name, participant.lastname]
  );

  if (res.rowCount === 0)
    throw new Error(
      "Participant with the given name and last name does not exist."
    );
  else return res.rows[0];
};

const getPartipationTotalQuery = async (): Promise<number> => {
  const result = await pool.query(
    "SELECT SUM(participation) AS total_participation FROM participants;"
  );
  return parseInt(result.rows[0].total_participation);
};

const getParticipationTotalWhereQuery = async (participant: Participant): Promise<number> => {
  const result = await pool.query(
    `SELECT SUM(participation) AS total_participation FROM participants WHERE (name, lastName) <> ('${participant.name}', '${participant.lastname}');`
  );
  return parseInt(result.rows[0].total_participation);
};

const beginTransactionQuery = async () => {
  await pool.query("BEGIN");
};

const endTransactionQuery = async () => {
  await pool.query("ROLLBACK");
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
  beginTransactionQuery,
  endTransactionQuery,
  getPartipationTotalQuery,
  getParticipationTotalWhereQuery,
  test,
};
