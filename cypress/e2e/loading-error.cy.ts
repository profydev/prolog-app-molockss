// For the test to pass the erorr message has to be displayed when the request fails
//1st - check if loading error component is displayed when request fails
//2nd - click try again button and see if takes you to the URL of localhost/dashboard

describe("loading error", () => {
  beforeEach(() => {
    // Intercept the network request and respond with a 500 status code
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      statusCode: 500,
      body: "Internal Server Error",
      headers: {
        "content-type": "application/json",
      },
    }).as("failedRequest");

    cy.visit("http://localhost:3000/dashboard");
    cy.viewport(1025, 900);
  });

  it("renders a loading error when the data fetch fails", () => {
    // Wait for the intercepted request to complete with a timeout of 5000 milliseconds (5 seconds)
    cy.wait("@failedRequest", { timeout: 5000 });

    // Add an additional wait to allow time for the loading error element to be rendered
    cy.wait(5000);

    // Check if the loading error component is visible
    cy.get('[data-testid="loading-error"]').should("be.visible");

    //check if button redirects back to URL
    cy.get("button").contains("Try again").click();
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });
});
