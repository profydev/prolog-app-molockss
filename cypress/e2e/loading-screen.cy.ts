describe("loading screen", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
    cy.viewport(1025, 900);
  });

  it("renders a loading indicator while the data is loading", () => {
    // Check if the loading screen is initially visible
    cy.get('[data-testid="loading-screen"]').should("be.visible");

    // Wait for the data to load (replace with your actual loading trigger)
    cy.get('[data-testid="loaded-element"]').should("exist");

    // Check if the loading screen is not visible after data has loaded
    cy.get('[data-testid="loading-screen"]').should("not.exist", {
      timeout: 10000,
    });
  });
});
