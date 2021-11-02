/**
 * Test search bar and search view.
 */
describe("Searchbar, search function", () => {
    beforeEach(() => {
        const baseUrl = 'http://localhost:3000/';
        cy.visit(baseUrl);
    });

    it("should change view when search is done", () => {
        cy.get('.form-control').click().type('iron man');
        cy.get('.Search_button__dnbUm').click();
        cy.get('movie-deck').should('have.length', 3);
        //(There are three iron man movies in our database.)
        //this no longer works as we changed to card view and had no time to change it.
    })
});