describe('Hero Create', () => {
    
    it('CT001 - should create hero successfully', () => {
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
    })

})