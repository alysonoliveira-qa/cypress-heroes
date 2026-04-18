import { heroFactory } from "../../support/heroFactory"

describe('Edit Hero', () => {
      
  const editButton = '[data-cy="pencil"]'
  const heroCard = '[data-cy="hero-card"]'

  it('CT005 - should edit a hero successfully', () => {

    // Arrange
    cy.login('admin@test.com', 'test123')
    cy.isLoggedIn()

    
    const hero = heroFactory()
    const updatedName = hero.name + ' Updated'

    cy.createHero(hero)

    // Act - open edit
    cy.contains(heroCard, hero.name)
      .should('be.visible')
      .within(() => {
        cy.get(editButton).click()
      })

    // Fill form
    cy.get('[data-cy="nameInput"]').clear().type(updatedName)
    cy.get('[data-cy="priceInput"]').clear().type('999')
    cy.get('[data-cy="fansInput"]').clear().type('100')
    cy.get('[data-cy="savesInput"]').clear().type('50')
    cy.get('[data-cy="powersSelect"]').select('Invisibility')

    // Submit
    cy.contains('button', 'Submit').click()

    // Validate
    cy.reload()
    cy.contains(heroCard, updatedName).should('be.visible')
  })
})