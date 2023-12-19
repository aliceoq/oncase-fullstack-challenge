const newParticipant = { name: "Cypress", lastname: "Test", participation: 1 };
const updatedParticipant = {
  name: "Cypress",
  lastname: "Test",
  participation: 13,
};

describe("Participant Registration", () => {
  before(() => {
    cy.request(
      "DELETE",
      `${Cypress.env().VITE_TEST_BACKEND_URL}/participants`,
      newParticipant
    );
  });

  after(() => {
    cy.request(
      "DELETE",
      `${Cypress.env().VITE_TEST_BACKEND_URL}/participants`,
      newParticipant
    );
  });

  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("registers a participant and displays in the table", () => {
    cy.get("[data-cy=firstname]").type(newParticipant.name);
    cy.get("[data-cy=lastname]").type(newParticipant.lastname);
    cy.get("[data-cy=participation]").type(
      newParticipant.participation.toString()
    );

    cy.get("[data-cy=submit-button]").click();

    cy.get("[data-cy=participant-table]").contains(newParticipant.name);
    cy.get("[data-cy=participant-table]").contains(newParticipant.lastname);
  });

  it("edits a participant and displays in the table", () => {
    cy.get("[data-cy=view-page-button]").click();

    cy.get("[data-cy=participant-edit-table]").contains(newParticipant.name);
    cy.get("[data-cy=participant-edit-table]").contains(
      newParticipant.lastname
    );
    cy.get(`[data-cy=edit-button-${newParticipant.name}]`).click();

    cy.get("[data-cy=firstname-editor]").should(
      "have.value",
      newParticipant.name
    );
    cy.get("[data-cy=lastname-editor]").should(
      "have.value",
      newParticipant.lastname
    );
    cy.get("[data-cy=participation-editor]").type("3");
    cy.get("[data-cy=submit-editor-button]").click();

    cy.get("[data-cy=participant-edit-table]").contains(
      updatedParticipant.participation
    );
  });

  it("deletes a participant and checks the table", () => {
    cy.get("[data-cy=view-page-button]").click();

    cy.get("[data-cy=participant-edit-table]").contains(newParticipant.name);
    cy.get("[data-cy=participant-edit-table]").contains(
      newParticipant.lastname
    );
    cy.get(`[data-cy=delete-button-${newParticipant.name}]`).click();

    cy.get("[data-cy=participant-edit-table]")
      .contains(newParticipant.name)
      .should("not.exist");
  });
});
