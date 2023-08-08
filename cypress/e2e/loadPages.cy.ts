describe('Verify if pages are accessible', () => {
  it('Home', () => {
    cy.visit('/')
    cy.log('Home loaded successfully!')
  })

  it('Perfil', () => {
    cy.visit('/perfil')
    cy.log('Profile loaded successfully!')
  })

  it('Login', () => {
    cy.visit('/login')
    cy.log('Login loaded successfully!')
  })

  it('Password Recovery', () => {
    cy.visit('/password-recovery')
    cy.log('Password Recovery loaded successfully!')
  })

  it('Password Feedback', () => {
    cy.visit('/password-feedback')
    cy.log('Password Feedback loaded successfully!')
  })

  it('Agent Selection', () => {
    cy.visit('/agent-selection')
    cy.log('Agent Selection loaded successfully!')
  })
})
