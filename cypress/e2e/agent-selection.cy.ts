describe('Verify if I have selected a agent and redirected correctly', () => {
  it('Selecting an agent', () => {
    cy.visit('/agent-selection')
    cy.get('[data-cy="select"]')
      .select('Captain America')
      .should('have.value', 'Captain America')

    cy.get('[data-cy="submit"]').click()

    if (cy.url().should('include', '/perfil')) {
      cy.log('Agent selection was a successfull!')
    }
  })
})
