/// <reference types="cypress" />
import { qase } from "cypress-qase-reporter/dist/mocha";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  qase(1,
    it("displays two todo items by default", () => {
      cy.get(".todo-list li").should("have.length", 2);

      cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
      cy.get(".todo-list li").last().should("have.text", "Walk the dog");
    })
  );

  qase(1,
    it("can add new todo items", () => {
      const newItem = "Feed the cat";

      cy.get("[data-test=new-todo]").type(`${newItem}{enter}`);

      cy.get(".todo-list li")
        .should("have.length", 3)
        .last()
        .should("have.text", newItem);
    })
  );

  qase(1,
    it("can check off an item as completed", () => {
      cy.contains("Pay electric bill")
        .parent()
        .find("input[type=checkbox]")
        .check();

      cy.contains("Pay electric bill")
        .parents("li")
        .should("have.class", "completed");
    })
  );

  context("with a checked task", () => {
    beforeEach(() => {
      cy.contains("Pay electric bill")
        .parent()
        .find("input[type=checkbox]")
        .check();
    });
    qase(2,
      it("can filter for uncompleted tasks", () => {
        cy.contains("Active").click();

        cy.get(".todo-list li")
          .should("have.length", 1)
          .first()
          .should("have.text", "Walk the dog");

        cy.contains("Pay electric bill").should("not.exist");
      })
    );

    qase(2,
      it("can filter for completed tasks", () => {
        cy.contains("Completed").click();

        cy.get(".todo-list li")
          .should("have.length", 1)
          .first()
          .should("have.text", "Pay electric bill");

        cy.contains("Walk the dog").should("not.exist");
      })
    );

    qase(2,
      it("can delete all completed tasks", () => {
        cy.contains("Clear completed").click();

        cy.get(".todo-list li")
          .should("have.length", 1)
          .should("not.have.text", "Pay electric bill");

        cy.contains("Clear completed").should("not.exist");
      })
    );
  });
});
