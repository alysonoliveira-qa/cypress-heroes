describe('Create Hero', () => {
    

    it('CT001 - should create a new hero successfully', () => {
        cy.login('admin@test.com', 'test123')
        cy.isLoggedIn()
    //start create
        cy.contains('button', 'Create New Hero').click()
    //fill name
        cy.get('[data-cy="nameInput"]').type('Hero1')
    //fill price
        cy.get('[data-cy="priceInput"]').type('73')
        cy.get('[data-cy="fansInput"]').type('30')
        cy.get('[data-cy="savesInput"]').type('4')
        cy.get('[data-cy="powersSelect"]').select('Flying')
    //submit
        cy.contains('button', 'Submit').click()

    //validate
        cy.contains('Hero1').should('be.visible')
    })

    it('CT002 - should not create a new hero without name', () => {
        cy.login('admin@test.com', 'test123')
        cy.isLoggedIn()
    //start create
        cy.contains('button', 'Create New Hero').click()
    //fill name
        //cy.get('[data-cy="nameInput"]').type('')
    //fill price
        cy.get('[data-cy="priceInput"]').type('73')
        cy.get('[data-cy="fansInput"]').type('30')
        cy.get('[data-cy="savesInput"]').type('4')
        cy.get('[data-cy="powersSelect"]').select('Flying')
    //submit
        cy.contains('button', 'Submit').click()

    //validate
        cy.contains('Name is required').should('be.visible')
    })

    it('CT003 - should not create a new hero with invalid price', () => {
        cy.login('admin@test.com', 'test123')
        cy.isLoggedIn()
    //start create
        cy.contains('button', 'Create New Hero').click()
    //fill name
        cy.get('[data-cy="nameInput"]').type('Hero1')
    //fill price
        cy.get('[data-cy="priceInput"]').type('-10')
        cy.get('[data-cy="fansInput"]').type('30')
        cy.get('[data-cy="savesInput"]').type('4')
        cy.get('[data-cy="powersSelect"]').select('Flying')
    //submit
        cy.contains('button', 'Submit').click()

    //validate
        cy.contains('Price is invalid').should('be.visible')
    })

})