/// <reference types="cypress" />

describe('Subscribe', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    it('Allows user to subscribe to email list', () => {
      cy.getByData('email-input').type("mail@mail.com")
      cy.getByData('submit-button').click()
      cy.getByData('success-message').should('exist').contains('mail@mail.com')
    })
    it('Does Not allow user to subscribe to email list', () => {
      cy.getByData('email-input').type("mail")
      cy.getByData('submit-button').click()
      cy.get('#email:invalid')
          .invoke('prop', 'validationMessage')
          .should('exist')
    })
    it('User already registered', () => {
      cy.getByData('email-input').type("john@example.com")
      cy.getByData('submit-button').click()
      cy.getByData('server-error-message').should('exist').contains('Error')
    })
    
  })