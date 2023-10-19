describe('Verify if I can interact with the Profile page', () => {
  it('Selecting a tab', () => {
    cy.visit('/perfil/captain%20america')

    cy.get("[data-cy='Visão Geral']").click()
    cy.get("[data-cy='Comics']").click()
    cy.get("[data-cy='Events']").click()
    cy.get("[data-cy='Stories']").click()
    cy.get("[data-cy='Authors']").click()

    cy.log('Profile interacted with successfully!')
  })
})
