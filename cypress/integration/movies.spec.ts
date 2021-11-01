/**
 * Tests main page.
 */

 describe("Movies, main page", () => {
    beforeEach(() => {
        const baseUrl = 'http://localhost:3000/';
        cy.visit(baseUrl);
      });
    
    it("should have a title and summary", () => {
        cy.get('.MovieSummary_summary__1B7F2').find('h2')
        .should(e => {
          const [h2] = e.get();
          console.log('h2!', h2, h2.textContent);
          expect(h2.textContent).to.contains('All Marvel movies');
        });
        cy.get('.MovieSummary_summary__1B7F2').find('p')
        .should(e => {
          const [h2] = e.get();
          console.log('h2!', h2, h2.textContent);
          expect(h2.textContent).to.contains('Search for you favourite Marvel movie');
        });
    })

    it("should have a Movie object that contains 'captain america' ", () => {
        cy.get('.Card_card__1m44e li').should('contain.text', 'Captain America 1');
    })
 } )