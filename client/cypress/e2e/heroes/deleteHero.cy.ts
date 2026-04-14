import { heroFactory } from "../../support/heroFactory"

describe('Delete Hero', () => {

  const heroCard = '[data-cy="hero-card"]'
  const deleteButton = '[data-cy="trash"]' // ajustar se necessário

  it('CT006 - should delete a hero successfully', () => {

    // Arrange
    cy.login('admin@test.com', 'test123')
    cy.isLoggedIn()

    const hero = heroFactory()

    cy.createHero(hero)

    // Act - delete hero
    cy.contains(heroCard, hero.name)
      .should('be.visible')
      .within(() => {
        cy.get(deleteButton).click()
      })
    
    //confirm delete
    cy.contains('button', 'Yes').click()

    // Validate
    cy.contains(heroCard, hero.name).should('not.exist')
  })
})