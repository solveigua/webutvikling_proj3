/**
 * Tests main page.
 */

 describe("Movies, main page", () => {
    beforeEach(() => {
        const baseUrl = 'http://localhost:3000/';
        cy.visit(baseUrl);
      });
    
    it("should have a title", () => {
        cy.get('.MovieSummary_summary__1B7F2').find('h2')
        .should(e => {
          const [h2] = e.get();
          console.log('h2!', h2, h2.textContent);
          expect(h2.textContent).to.contains('Marvel Cinematic Universe');
        });
    })

    it("should have summary", () => {
      cy.get('.MovieSummary_summary__1B7F2').find('p')
        .should(e => {
          const [h2] = e.get();
          console.log('h2!', h2, h2.textContent);
          expect(h2.textContent).to.contains('Search for your favourite Marvel Cinematic Universe movies and give them a rating!');
        });
    })
 } )