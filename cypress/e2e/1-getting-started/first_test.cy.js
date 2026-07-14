describe('Visiting site Booklist', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Books list').should("be.visible");
  })
})


