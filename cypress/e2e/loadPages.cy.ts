describe('Verify if pages are accessible', () => {
  it('Home', () => {
    cy.visit('/')
    cy.log('Home loaded successfully!')
  })

  it('Checkout', () => {
    cy.visit('/checkout')
    cy.log('Checkout loaded successfully!')
  })

  it('Success', () => {
    cy.visit('/success')
    cy.log('Success loaded successfully!')
  })
})