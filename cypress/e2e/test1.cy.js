

it('Google', () => {
    cy.visit('https://google.com/')
    cy.get('.gLFyf').type('Automation Step by Step {enter}')
})