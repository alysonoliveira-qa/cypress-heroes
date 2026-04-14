import { heroFactory } from "../../support/heroFactory"

describe('List Heroes', () => {
    const heroCard = '[data-cy="hero-card"]'

    it('CT 004 - should display heroes list', () => {
        cy.login('admin@test.com', 'test123')
        cy.isLoggedIn()

        const hero = heroFactory()

        cy.createHero(hero)

        // validate list in not empty
        cy.get(heroCard).should('have.length.greaterThan', 0)

        // validate specific hero
        cy.contains(heroCard, hero.name)
            .should('be.visible')
    })
})