/**
 * Tests header component.
 */

describe('Header', () => {
  beforeEach(() => {
    const baseUrl = 'http://localhost:3000/';
    cy.visit(baseUrl);
  });

  it("should show 'Marvel Movies' as title", () => {
    cy.get('.Header_header__zSTUo')
      .find('h1')
      .should(e => {
        const [h2] = e.get();
        console.log('h2!', h2, h2.textContent);
        expect(h2.textContent).to.contains('Marvel Movies');
      });
  });

  it("should display background image", () => {
    cy.get('.Header_main-image__2Q3So').find("img").should('be.visible');
  });
});
