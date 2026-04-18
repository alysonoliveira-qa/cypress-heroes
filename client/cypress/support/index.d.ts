declare namespace Cypress {
  interface Chainable {
    createHero(hero: {
      name: string
      price: string
      fans: string
      saves: string
      power: string
    }): Chainable<void>
  }
}