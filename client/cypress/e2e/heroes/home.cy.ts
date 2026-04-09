describe('Home Page', () => {
  it('should load heroes successfully', () => {

    cy.intercept('GET', '**/heroes').as('getHeroes')

    cy.visit('http://localhost:3000')

    cy.wait('@getHeroes')
      .its('response.statusCode')
      .should('eq', 200)

      cy.get('[data-cy="name"]').should('have.length.greaterThan', 0)

  })
})