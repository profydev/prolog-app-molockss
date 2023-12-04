describe("footer navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
    cy.viewport(1025, 900);
    cy.get("footer").as("Footer");
  });

  it("renders the current version of the application", () => {
    const version = Cypress.env("version");
    cy.get("@Footer").contains(`Version: ${version}`);
  });

  it("renders the correct links", () => {
    cy.get("@Footer").find("ul").as("footerNav");

    cy.get("@footerNav").find("li").should("have.length", 4);

    cy.get("@footerNav").contains("Docs").should("have.attr", "href", "#");

    cy.get("@footerNav").contains("API").should("have.attr", "href", "#");

    cy.get("@footerNav").contains("Help").should("have.attr", "href", "#");

    cy.get("@footerNav").contains("Community").should("have.attr", "href", "#");
  });

  it("prolog logo renders", () => {
    cy.get("@Footer")
      .find("img")
      .should("have.attr", "src", "/icons/logo-small.svg");
  });
});
