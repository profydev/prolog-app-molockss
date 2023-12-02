// import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");

    cy.get('[data-testid="project-list"]').find("li").should("have.length", 3);
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // get all project cards
      cy.get("[data-testid='project-list']")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);

          // Debugging: Log the actual text content of the element
          cy.wrap($el).then(($el) => {
            const statusText = $el.text();
            cy.log(`Actual status text: ${statusText}`);
          });

          // check the status text
          // const expectedStatus = capitalize(mockProjects[index].status);
          // cy.wrap($el).contains(expectedStatus);

          // check the href attribute for the anchor element
          cy.wrap($el)
            .find("a")
            .should(($a) => {
              const hrefValue = $a.attr("href");
              expect(hrefValue).to.equal(
                "/dashboard/issues",
                `Actual href: ${hrefValue}`,
              );
            });
        });
    });
  });
});
