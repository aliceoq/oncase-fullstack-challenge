import request from "supertest";

import { beginTransactionQuery, deleteParticipantsQuery, endTransactionQuery } from "../db/queries";
import { app } from "..";

const newParticipant = {
  name: "New",
  lastname: "Participant",
  participation: 5,
};

const updatedParticipant = {
  name: "New",
  lastname: "Participant",
  participation: 15,
};

describe("Participants", () => {
  beforeAll(async () => {
    await beginTransactionQuery();
    await deleteParticipantsQuery();
  });

  afterAll(async () => {
    await endTransactionQuery();
  });

  it("should get all participants", async () => {
    const response = await request(app).get("/participants");
    expect(response.status).toBe(200);
  });

  it("should create new participant", async () => {
    const response = await request(app).post("/participants").send(newParticipant);
    expect(response.body.name).toBe(newParticipant.name);
    expect(response.body.lastname).toBe(newParticipant.lastname);
    expect(response.body.participation).toBe(newParticipant.participation);
    expect(response.status).toBe(201);
  });

  it("should update the new participant", async () => {
    const response = await request(app).put("/participants").send(updatedParticipant);
    expect(response.body.name).toBe(updatedParticipant.name);
    expect(response.body.lastname).toBe(updatedParticipant.lastname);
    expect(response.body.participation).toBe(updatedParticipant.participation);
    expect(response.status).toBe(200);
  });

  it("should delete the new participant", async () => {
    const response = await request(app).delete("/participants").send(newParticipant);
    expect(response.status).toBe(204);
  });
});
