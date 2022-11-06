describe('Demo3', () => {
  it('TC1', () => {
    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Cypress')
  })
})