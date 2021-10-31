/**
 * Deployment test.
 */

describe("Checks deployment website visit", () => {
//Todo change to deployment uri.
    it("launching website", () => {
        cy.visit('http://localhost:3000');
    });
});