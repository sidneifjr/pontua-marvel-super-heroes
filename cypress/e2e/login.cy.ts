describe('Verify if login is validated correctly', () => {
  it('Filling form', () => {
    cy.visit('/login')
    cy.get('[data-cy="email"]').focus().type('test@gmail.com')
    cy.get('[data-cy="password"]').focus().type('test')
    cy.get('[data-cy="submit-btn"]').click()

    if (cy.url().should('include', '/agent-selection')) {
      cy.log('Login successfull!')
    }
  })
})
