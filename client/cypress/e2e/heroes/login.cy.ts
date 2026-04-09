describe('Login Feature', () => {

  it('CT 001 - should login successfully with valid credentials', () => {
    
    cy.login('test@test.com', 'test123')

    cy.isLoggedIn()

  })

  //   it('CT 001 - should login successfully with valid credentials', () => {
  //   cy.visit('/heroes')

  //   cy.contains('button', 'Login').click()

  //   cy.get('input[name="email"]').type('test@test.com')
  //   cy.get('input[name="password"]').type('test123')

  //   cy.contains('button', 'Sign in').click()

  //   cy.contains('button', 'Logout').should('be.visible')

  // })

  it('CT002 - should logout successfully', () => {

    cy.visit('/heroes')

    cy.contains('button', 'Login').click()

    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('test123')
    cy.contains('button', 'Sign in').click()

    // valida que logou
    cy.contains('button', 'Logout').should('be.visible')

    // ação de logout
    cy.contains('button', 'Logout').click()

    // valida logout
    cy.contains('button', 'Login').should('be.visible')
    cy.contains('button', 'Logout').should('not.exist')

  })

  it('CT 003 - should prevent login with invalid password and display error message', () => {

    cy.visit('/heroes')

    cy.contains('button', 'Login').click()

    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('wrongpass')
    cy.contains('button','Sign in').click()

    cy.contains('Invalid email or password').should('be.visible')
    cy.url().should('include', '/heroes')

  })

  it('CT 004 - should prevent login with invalid email and display error message', () => {

    cy.visit('/heroes')

    cy.contains('button', 'Login').click()

    cy.get('input[name="email"]').type('email@email.com')
    cy.get('input[name="password"]').type('test123')
    cy.contains('button','Sign in').click()

    cy.contains('Invalid email or password').should('be.visible')
    cy.url().should('include', '/heroes')

  })

  it('CT 005 - should prevent login with empty fields and display error message', () => {

    cy.visit('/heroes')

    cy.contains('button', 'Login').click()
    cy.contains('button','Sign in').click()

    cy.contains('Email is required').should('be.visible')
    cy.contains('Password is required').should('be.visible')
    cy.url().should('include', '/heroes')

  })

  it('CT 006 - should prevent login with empty password field and display error message', () => {

    cy.visit('/heroes')

    cy.contains('button', 'Login').click()

    cy.get('input[name="email"]').type('test@test.com')
    cy.contains('button','Sign in').click()

    cy.contains('Password is required').should('be.visible')
    cy.url().should('include', '/heroes')

  })

  it('CT 007 - should prevent login with empty email field and display error message', () => {

    cy.visit('/heroes')

    cy.contains('button', 'Login').click()

    cy.get('input[name="password"]').type('test123')
    cy.contains('button','Sign in').click()

    cy.contains('Email is required').should('be.visible')
    cy.url().should('include', '/heroes')

  })

  it('CT 008 - should prevent login with invalid password and email and display error message', () => {

    cy.visit('/heroes')

    cy.contains('button', 'Login').click()

    cy.get('input[name="email"]').type('email@email.com')
    cy.get('input[name="password"]').type('wrongpass')
    cy.contains('button','Sign in').click()

    //The sistem should to especify the just field to correct
    cy.contains('Invalid email or password').should('be.visible')
    cy.url().should('include', '/heroes')

  })

  it('CT 009 - should prevent login with empty email field and display error message', () => {

    cy.visit('/heroes')

    cy.contains('button', 'Login').click()

    cy.get('input[name="email"]').click()
    cy.get('input[name="password"]').type('test123')
    cy.contains('button','Sign in').click()

    cy.contains('Email is required').should('be.visible')
    cy.url().should('include', '/heroes')

  })

})